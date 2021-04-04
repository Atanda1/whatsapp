import actions from './actions'
import mutations from './mutations'
import getters from './getters'


const state = () => ({
	userImage : '',
	imageUrl: '',
	name: '',
	uid: '',
	chatData: null,
	receivedChatData: null
})

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}