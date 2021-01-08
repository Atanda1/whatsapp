<template>
	<div class="Chat__Room">
		<div class="container">
			<div class="Chatroom">
				<chatroom-list/>
				<chatroom-message/>
			</div>
				
		</div>
	</div>
</template>

<script>
import ChatroomList from '../components/chatroom-list/chatroomList.vue'
import ChatroomMessage from '../components/chatroom-message/chatroomMessage.vue'

export default {
  name: 'Chatroom',
  components: {
    ChatroomList,
    ChatroomMessage,
  }
}
</script>

<style>
	/* @import '../styles/css/style.css'; */
</style>