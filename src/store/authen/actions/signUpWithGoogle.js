import { auth, provider, dbf } from "../../../firebase";
import router from "../../../router";

const signUpWithGoogle = () => {
  auth
    .signInWithPopup(provider)
    .then((cred) => {
      return dbf
        .collection("users")
        .doc(cred.user.uid)
        .set({
          name: cred.user.displayName,
          image:  cred.user.photoURL,
        });
    })
    .then(() => {
      router.push({ name: "chat" });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default signUpWithGoogle;
