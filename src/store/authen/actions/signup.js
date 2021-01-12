import Vue from 'vue'
import { dbf, auth } from "../../../firebase";
import router from "../../../router";

const signup = ({ commit }, form) => {
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
};

export default signup;
