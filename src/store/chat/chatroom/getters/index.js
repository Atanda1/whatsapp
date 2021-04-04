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

const getReceivedChat = (state) => {
	return state.receivedChatData
}

const getters = {
	getImage,
	getChatInfo,
	getChat,
	getReceiverUid,
	getReceivedChat
}

export default getters;