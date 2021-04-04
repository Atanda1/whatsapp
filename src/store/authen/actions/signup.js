import Vue from 'vue'
import { dbf, auth } from "../../../firebase";
import router from "../../../router";

const signup = ({ commit }, form) => {
  commit("loadingStatus", true);
  auth
    .createUserWithEmailAndPassword(form.email, form.password)
    .then((cred) => {
      return dbf
        .collection("users")
        .doc(cred.user.uid)
        .set({
          name: form.name,
          image: form.image,
          uid:cred.user.uid
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
      commit("loadingStatus", false);
    });
};

export default signup;
