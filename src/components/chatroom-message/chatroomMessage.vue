<template>
  <div>
    <div v-if="show">
      <chat-profile />
      <chat-details />
      <message-bar />
    </div>
    <div v-else class="Placeholder__div">
      <placeholder-page/>
    </div>
  </div>
</template>

<script>
import ChatDetails from "./chatDetails.vue";
import ChatProfile from "./chatProfile.vue";
import MessageBar from "./messageBar.vue";
import PlaceholderPage from './placeholderPage.vue'
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("chat/chatroom");

export default {
  name: "ChatroomMessage",
  // data() {
  //   return {
  //     uid: null
  //   }
  // },
  computed: {
    ...mapGetters({
      chatInfo: "getChatInfo",
    }),
    show() {
      return this.chatInfo.uid !== '' ? true : false;
    },
  },
  // mounted() {
  //   this.$root.$on("passChatData", (imageUrl, name, uid) => {
  //     this.uid = uid;
  //   });
  // },
  components: {
    ChatProfile,
    ChatDetails,
    MessageBar,
    PlaceholderPage
  },
};
</script>

<style></style>
