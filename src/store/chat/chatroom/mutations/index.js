const setImage = (state, imageUrl) => {
  state.userImage = imageUrl;
};

const setChatMessage = (state, chatMessage) => {
  state.chatData = chatMessage;
};

const setChatInfo = (state, chatInfo) => {
  const { imageUrl, name, uid } = chatInfo;
  state.imageUrl = imageUrl;
  state.name = name;
  state.uid = uid;
};

const mutations = {
  setImage,
  setChatInfo,
  setChatMessage,
};

export default mutations;
