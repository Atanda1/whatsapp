import { dbf, auth } from "../../../../firebase";
//import Vue from 'vue'

const chatMessage = (context) => {
  dbf
    .collection("messages")
		.where("receiver", "==", context.state.uid)
		.where("sender", "==", auth.currentUser.uid)
    .onSnapshot((querySnapshot) => {
      const chatArray = [];
      querySnapshot.docs.map((doc) => {
        chatArray.push(doc.data());
      });
			context.commit("setChatMessage", chatArray);
    })
};

export default chatMessage; 


