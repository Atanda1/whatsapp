<template>
  <div class="Chatroom__details__chat" ref="container">
    <div
      v-for="message in messages"
      :key="message.imageName"
			:ref="`${messages.timestamp}`"
      :class="
        filter(message.receiver, message.sender)
          ? 'Chatroom__details__chat__sent'
          : 'Chatroom__details__chat__received'
      "
    >
      <img
        v-if="message.image"
        class="Chatroom__details__chat__image"
        :src="message.image"
      />
      <p v-if="message.message">
        {{ message.message }}<span>{{ message.time }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import { auth } from "../../firebase";
const { mapGetters } = createNamespacedHelpers("chat/chatroom");

export default {
  name: "ChatDetails",
  methods: {
    scrollDown() {
      const content = this.$refs.container;
			content.scrollTop = content.scrollHeight;
    },
    getAllMessages() {
      if (this.getMessages && this.getReceiverMessage) {
        const totalMessages = this.getMessages.concat(this.getReceiverMessage);
        return totalMessages.sort((a, b) => a.timestamp - b.timestamp);
      }
    },
    filter(receiver, sender) {
      if (this.currentUserUid === sender) {
        return true;
      } else if (this.receiverUid === receiver) {
        return false;
      }
    },
  },
  computed: {
    ...mapGetters({
      getMessages: "getChat",
      getReceiver: "getReceiverUid",
      getReceiverMessage: "getReceivedChat",
    }),
    messages() {
      return this.getAllMessages();
    },
		// checkMessages() {
		// 	return this.messages ? true : false
		// },
    receiverUid() {
      return this.getReceiver;
    },
    currentUserUid() {
      return auth.currentUser.uid;
    },
  },
  watch: {
    messages: function() {
     this.scrollDown();
    },
  },
};
</script>
