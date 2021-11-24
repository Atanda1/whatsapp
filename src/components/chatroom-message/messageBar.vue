<template>
  <div class="Chatroom__details__message">
    <div class="Chatroom__details__message__image-upload">
      <label for="file-input">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="Chatroom__details__message__svg mr-auto Chatroom__details__message__image-upload__icon"
        >
          <path
            fill="currentColor"
            d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
          ></path>
        </svg>
      </label>
      <input
        id="file-input"
        type="file"
        ref="fileInput"
        accept="image/*"
        @change="onFilePicked"
        required
      />
    </div>
    <input
      class="Chatroom__details__message__input"
      type="text"
      placeholder=" Type a message"
      v-model="messageData.message"
      @keyup.enter="messageSent"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="Chatroom__details__message__svg mr-auto"
      @click="messageSent"
    >
      <path
        fill="currentColor"
        d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
      ></path>
    </svg>
  </div>
</template>

<script>
import Vue from "vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("chat/chatroom");

export default {
  name: "MessageBar",
  data() {
    return {
      messageData: {
        message: "",
        image: null,
        imageName: "",
        time: "",
        timestamp: "",
      },
    };
  },
  methods: {
    ...mapActions({
      sendMessage: "sendMessage",
    }),
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.messageData.image = files[0];
      const fileName = this.$refs.fileInput.value;
      this.messageData.imageName = fileName.split("\\").pop();
      Vue.toasted.show(this.messageData.imageName + " attached", {
        position: "top-right",
        duration: 4000,
      });
    },
    messageSent() {
      if (
        this.messageData.imageName === "" &&
        this.messageData.message === ""
      ) {
        Vue.toasted.show("Can't send empty message", {
          position: "top-right",
          duration: 4000,
        });
      } else {
        this.messageData.time = new Date().toLocaleTimeString();
        this.messageData.timestamp = Date.now();
        this.sendMessage(this.messageData).then(() => {
          this.messageData = {
            message: "",
            image: null,
            imageName: "",
            time: "",
            timestamp: "",
          };
        });
      }
    },
  },
};
</script>
