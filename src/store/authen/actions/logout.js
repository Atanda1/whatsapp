import { auth } from "../../../firebase";
import router from "../../../router";

const logout = () => {
  auth.signOut().then((res) => {
    console.log(res)
    router.push({ name: "login" })
  }
  )};

export default logout;
