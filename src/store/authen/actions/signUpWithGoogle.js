import { auth, provider } from "../../../firebase";
import router from "../../../router";

const signUpWithGoogle = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
      router.push({ name: "chat" });
    })
    .catch((error) => {
      console.log(error);
    });
};

export default signUpWithGoogle;
