<template>
	<div>
		<user-profile :userImageUrl= "userImageUrl"/>
		<search-bar/>
		<message-list/>
	</div>	
</template>

<script>
import MessageList from './messageList.vue';
import SearchBar from './searchBar.vue';
import UserProfile from './userProfile.vue';

export default {
	name: 'ChatroomList',
	components: {
		UserProfile,
		SearchBar,
		MessageList,
	},
	props: {
		userImageUrl: {
			type: String
		}
	}
}
</script>

<style >

</style>