import { auth, provider, dbf } from "../../../firebase";
import router from "../../../router";

const signUpWithGoogle = ({commit}) => {
  commit("loadingStatus", true);
  auth
    .signInWithPopup(provider)
    .then((cred) => {
      return dbf
        .collection("users")
        .doc(cred.user.uid)
        .set({
          name: cred.user.displayName,
          image:  cred.user.photoURL,
          uid: cred.user.uid
        });
    })
    .then(() => {
      commit("loadingStatus", false);
      router.push({ name: "chat" });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default signUpWithGoogle;
