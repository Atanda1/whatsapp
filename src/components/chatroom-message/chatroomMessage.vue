<template>
	<div>
		<chat-profile/>
		<chat-details/>
		<message-bar/>
	</div>
</template>

<script>
import ChatDetails from './chatDetails.vue'
import ChatProfile from './chatProfile.vue'
import MessageBar from './messageBar.vue'

export default {
  name: 'ChatroomMessage',
  components: {
    ChatProfile,
    ChatDetails,
    MessageBar
  }
}
</script>

<style>
	
</style>