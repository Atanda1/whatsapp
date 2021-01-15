import { dbf } from "../../../../firebase";
import Vue from "vue";

const chatNames = () => {
  dbf.collection("users").get()
  .then((result) => {
	  console.log(result)
  })
  .catch((err) => {
	Vue.toasted.show(err, {
        position: "top-right",
        duration: 4000,
      });
  })
};

export default chatNames;