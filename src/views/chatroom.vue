<template>
  <div class="Chat__Room">
    <transition name="fade">
      <div class="container">
        <div class="Chatroom">
          <chatroom-list :userImageUrl="userImageUrl" :getUsersChatData="getUsersChatData" />
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
const {
  mapActions: listActions,
  mapGetters: listGetters,
} = createNamespacedHelpers("chat/list");

export default {
  name: "Chatroom",
  components: {
    ChatroomList,
    ChatroomMessage,
  },
  data() {
    return {
      imageUrl: "",
    };
  },
  computed: {
    ...mapGetters({
      getUserImage: "getImage",
    }),
    ...listGetters({
      getUsersData: "getUsers",
    }),
    userImageUrl() {
      return this.getUserImage;
    },
    getUsersChatData() {
      return this.getUsersData;
    },
  },
  methods: {
    ...mapActions({
      userImage: "currentUserImage",
    }),
    ...listActions({
      fetchUsersData: "fetchUsers",
    }),
    image() {
      return this.userImage();
    },
    usersData() {
      return this.fetchUsersData();
    },
  },
  created() {
    this.image();
    this.usersData();
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
