import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { dbf, auth, provider } from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {},
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val;
    },
  },
  actions: {
    signup(context, form) {
      auth
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((cred) => {
          return dbf
            .collection("users")
            .doc(cred.user.uid)
            .set({
              name: form.name,
            });
        })
        .then(() => {
          router.push({ name: "chat" });
        })
        .catch((error) => console.log(error));
    },
    logout() {
      auth.signOut();
      router.push({ name: "signup" });
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
    resetPassword(context, form) {
      auth.sendPasswordResetEmail(form.email);
      router.push({ name: "login" });
    },
    login(context, form) {
      // sign user in
      auth
        .signInWithEmailAndPassword(form.email, form.password)
        .then((res) => {
          console.log(res);
          router.push({ name: "chat" });
        })
        .catch((error) => console.log(error));

      // fetch user profile and set in state
      //dispatch('fetchUserProfile', user)
    },
  },
  getters: {},
});
