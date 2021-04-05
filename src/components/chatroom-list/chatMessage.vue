<template>
  <div>
    <div
      class="Chatroom__list__messages"
      v-for="result in resultQuery"
      :key="result.image"
    >
      <div class="Chatroom__list__messages__img" :style="{backgroundImage: `url(${result.image})`}">
        <!-- <img :src="result.image" /> -->
      </div>
      <div class="Chatroom__list__messages__message" @click="openMessage(result.image, result.name, result.uid)">
        <div class="Chatroom__list__messages__message__name">
          <div class="Chatroom__list__messages__message__name__indi">
            {{result.name}}
          </div>
          <div class="Chatroom__list__messages__message__name__time">
            
          </div>
        </div>
        <div class="Chatroom__list__messages__message__details">
          
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
        return this.getUsersChatData;
      }
    },
  },
  methods: {
    ...mapActions({
      uploadChatInfo: "displayChatInfo",
      pullChatMessage: "chatMessage",
      receivedChat: "receivedChatMessages"
      }),
    openMessage(imageUrl, name, uid) {
      this.uploadChatInfo({imageUrl, name, uid})
      this.$root.$emit("passChatData", imageUrl, name, uid)
      this.$root.$emit("passChatUserData", imageUrl, name, uid)
      this.pullMessages(); 
    },
    pullMessages() {
      this.receivedChat()
      this.pullChatMessage()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Chatroom__list__messages__img {
  width: 3rem;
    height: 3rem;
    -webkit-border-radius: 60px;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 60px;
    -moz-background-clip: padding;
    border-radius: 60px;
    background-clip: padding-box;
    /* margin: 7px 0 0 5px; */
    align-items: center;
    background-size: cover;
    background-position: center center;
}
</style>
