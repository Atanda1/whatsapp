<template>
  <div class="Chatroom__details__userprofile">
    <img class="Chatroom__details__userprofile__img" :src="chatInfo.imageUrl" />
    <div class="Chatroom__details__userprofile__name">{{ chatInfo.name }}</div>
    <img
      class="Chatroom__details__userprofile__chat"
      src="../../assets/search-header.svg"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="Chatroom__details__userprofile__chat"
    >
      <path
        fill="currentColor"
        d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
      ></path>
    </svg>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("chat/chatroom");
export default {
  name: "ChatProfile",
  computed: {
    ...mapGetters({
      chatData: "getChatInfo",
    }),
    chatInfo() {
      return this.chatData;
    },
  },
};
</script>
