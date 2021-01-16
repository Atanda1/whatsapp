<template>
  <div class="Chatroom__list__">
    <chat-message :getUsersChatData="getUsersChatData" />
  </div>
</template>

<script>
import ChatMessage from "./chatMessage.vue";

export default {
  name: "messageList",
  components: {
    ChatMessage,
  },
  props: {
    getUsersChatData: {
      type: Array,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
