<template>
  <div class="Chatroom__list__">
    <chat-message/>
  </div>
</template>

<script>
import ChatMessage from './chatMessage.vue'

export default {
  name: 'messageList',
  components: {
    ChatMessage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
