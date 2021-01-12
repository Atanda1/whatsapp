<template>
  <div class="Chat__Room">
    <transition name="fade">
      <div class="container">
        <div class="Chatroom">
          <chatroom-list />
          <chatroom-message />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ChatroomList from "../components/chatroom-list/chatroomList.vue";
import ChatroomMessage from "../components/chatroom-message/chatroomMessage.vue";

export default {
  name: "Chatroom",
  components: {
    ChatroomList,
    ChatroomMessage,
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
