import { dbf, ref, auth } from "../../../../firebase";

const sendMessage = (context, message) => {
  if (message.image) {
    const metadata = {
      contentType: message.image.type,
    };
    const name = +new Date() + "-" + message.image;
    const task = ref.child(name).put(message.image, metadata);
    task
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((url) => {
        console.log(url);
        message.image = url;
      })
      .then(() => {
        dbf.collection("messages").add({
          message: message.message,
          imageName: message.imageName,
          image: message.image,
          sender: auth.currentUser.uid,
          receiver: context.state.uid,
					time: message.time
        });
      })
      .catch((err) => console.log(err));
  } else {
    dbf.collection("messages").add({
      message: message.message,
      sender: auth.currentUser.uid,
      receiver: context.state.uid,
			time: message.time
    });
  }
};

export default sendMessage;
