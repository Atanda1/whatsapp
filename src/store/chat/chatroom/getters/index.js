const getImage = (state) => {
	return state.userImage 
}

const getChatInfo = (state) => {
	return state
}

const getReceiverUid = (state) => {
	return state.uid
}
const getChat = (state) => {
	return state.chatData
}

const getters = {
	getImage,
	getChatInfo,
	getChat,
	getReceiverUid
}

export default getters;