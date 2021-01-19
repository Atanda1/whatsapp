const getImage = (state) => {
	return state.userImage 
}

const getChatInfo = (state) => {
	return state
}

const getters = {
	getImage,
	getChatInfo
}

export default getters;