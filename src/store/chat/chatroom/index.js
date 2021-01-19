import actions from './actions'
import mutations from './mutations'
import getters from './getters'


const state = () => ({
	userImage : '',
	imageUrl: '',
	name: '',
	uid: ''
})

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}