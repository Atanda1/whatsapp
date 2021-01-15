import { auth } from "../../../firebase";
import router from "../../../router";
import Vue from 'vue'

const login = ({ commit }, form) => {
  commit("loadingStatus", true);
  auth
    .signInWithEmailAndPassword(form.email, form.password)
    .then((res) => {
      console.log(res);
      router.push({ name: "chat" });
      console.log(auth.currentUser)
      commit("loadingStatus", false);
    })
    .catch((error) => {
      commit("loadingStatus", false);
      //console.log(error);
      Vue.toasted.show(error, {
        position: "top-right",
        duration: 4000,
      });
    });
};

export default login;
