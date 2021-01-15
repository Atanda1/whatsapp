import { auth, dbf } from "../../../../firebase";
import Vue from "vue";

const currentUserImage = ({commit}) => {
  const currentUser = auth.currentUser.uid;
      dbf
        .collection("users")
        .doc(currentUser)
        .get()
    
    .then((data) => {
		console.log(data.data().image)
		commit("setImage", data.data().image)
	})
    .catch((err) => {
      Vue.toasted.show(err, {
        position: "top-right",
        duration: 4000,
      });
    });
};

export default currentUserImage;
