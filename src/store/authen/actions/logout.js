import { auth } from "../../../firebase";
import router from "../../../router";

const logout = () => {
  auth.signOut().then(() => router.push({ name: "login" }));
};

export default logout;
