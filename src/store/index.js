import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { ref, dbf, auth, provider } from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
    loadingStatus: false,
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    loadingStatus(state, newLoadingStatus) {
      state.loadingStatus = newLoadingStatus;
    },
  },
  actions: {
    uploadData({ commit, dispatch }, form) {
      commit("loadingStatus", true);
      const metadata = {
        contentType: form.image.type,
      };
      const name = +new Date() + "-" + form.image;
      const task = ref.child(name).put(form.image, metadata);
      task
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => {
          console.log(url);
          form.image = url;
        })
        .then(() => dispatch("signup", form));
    },
    signup({ commit }, form) {
      console.log(form);
      auth
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((cred) => {
          return dbf
            .collection("users")
            .doc(cred.user.uid)
            .set({
              name: form.name,
              image: form.image,
            });
        })
        .then(() => {
          router.push({ name: "chat" });
          commit("loadingStatus", false);
        })
        .catch((err) => {
          console.log(err);
          Vue.toasted.show(err, {
            position: "top-right",
            duration: 4000,
          });
        });
    },
    logout() {
      auth.signOut().then(() => router.push({ name: "login" }));
    },
    signUpWithGoogle() {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result);
          router.push({ name: "chat" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    resetPassword({commit}, form) {
      commit("loadingStatus", true);
      auth
        .sendPasswordResetEmail(form.email)
        .then(() => {
          commit("loadingStatus", false);
          Vue.toasted.show("Check your mail", {
            position: "top-right",
            duration: 4000,
          });
        })
        .catch((err) => {
        commit("loadingStatus", false);
          Vue.toasted.show(err, {
            position: "top-right",
            duration: 4000,
          })
        });
    },
    login({ commit }, form) {
      // sign user in
      commit("loadingStatus", true);
      auth
        .signInWithEmailAndPassword(form.email, form.password)
        .then((res) => {
          console.log(res);
          router.push({ name: "chat" });
          commit("loadingStatus", false);
        })
        .catch((error) => {
          commit("loadingStatus", false);
          console.log(error);
          Vue.toasted.show(error, {
            position: "top-right",
            duration: 4000,
          });
        });

      // fetch user profile and set in state
      //dispatch('fetchUserProfile', user)
    },
  },
  getters: {
    loadingStatus(state) {
      return state.loadingStatus;
    },
  },
});
