<template>
  <div class="Chat__Room">
    <transition name="fade">
      <div class="container">
        <div class="Chatroom">
          <chatroom-list :userImageUrl= "userImageUrl"/>
          <chatroom-message />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ChatroomList from "../components/chatroom-list/chatroomList.vue";
import ChatroomMessage from "../components/chatroom-message/chatroomMessage.vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("chat/chatroom");

export default {
  name: "Chatroom",
  components: {
    ChatroomList,
    ChatroomMessage,
  },
  data() {
    return {
      imageUrl : ''
    }
  },
  computed: {
    ...mapGetters({
      getUserImage: "getImage" 
    }),
    userImageUrl() {
      return this.getUserImage
    }
  },
  methods: {
    ...mapActions({
      userImage: "currentUserImage"
    }),
    image() {
      return this.userImage();
    }
  },
  mounted() {
    this.image();
  }
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
