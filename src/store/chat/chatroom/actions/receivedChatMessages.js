import { dbf, auth } from "../../../../firebase";

const receivedMessage = (context) => {
	dbf
	.collection("messages")
	.where("sender", "==", context.state.uid)
	.where("receiver", "==", auth.currentUser.uid)
	.onSnapshot((querySnapshot) => {
		const receivedArray = [];
		querySnapshot.docs.map((doc) => {
			receivedArray.push(doc.data());
		});
		context.commit("setReceivedChatMessage", receivedArray)
	})
}

export default receivedMessage;