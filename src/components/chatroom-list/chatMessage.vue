<template>
  <div>
    <div
      class="Chatroom__list__messages"
      v-for="result in resultQuery"
      :key="result.image"
    >
      <div class="Chatroom__list__messages__img">
        <img :src="result.image" />
      </div>
      <div class="Chatroom__list__messages__message" @click="openMessage(result.image, result.name, result.uid)">
        <div class="Chatroom__list__messages__message__name">
          <div class="Chatroom__list__messages__message__name__indi">
            {{result.name}}
          </div>
          <div class="Chatroom__list__messages__message__name__time">
            yesterday
          </div>
        </div>
        <div class="Chatroom__list__messages__message__details">
          message from supreme
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers("chat/chatroom");
export default {
  name: "chatMessage",
  data() {
    return {
      searchQuery: null,
    };
  },
  props: {
    getUsersChatData: {
      type: Array,
    },
  },
  mounted() {
    this.$root.$on('searchParam', newValue => {
      this.searchQuery = newValue;
    })
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.getUsersChatData.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      } else {
        console.log(this.getUsersChatData);
        return this.getUsersChatData;
      }
    },
  },
  methods: {
    ...mapActions({
      uploadChatInfo: "displayChatInfo"
      }),
    openMessage(imageUrl, name, uid) {
      console.log(imageUrl, name, uid)
      this.uploadChatInfo({imageUrl, name, uid})
      this.$root.$emit("passChatData", imageUrl, name, uid)
      this.$root.$emit("passChatUserData", imageUrl, name, uid)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
