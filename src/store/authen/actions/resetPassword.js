import { auth } from "../../../firebase";
import Vue from 'vue'

const resetPassword = ({ commit }, form) => {
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
      });
    });
};

export default resetPassword;
