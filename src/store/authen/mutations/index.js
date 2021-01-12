const setUserProfile = (state, newUserProfile) => {
  state.userProfile = newUserProfile;
};
const loadingStatus = (state, newLoadingStatus) => {
  state.loadingStatus = newLoadingStatus;
};

const mutations = {
  setUserProfile,
  loadingStatus,
};

export default mutations;