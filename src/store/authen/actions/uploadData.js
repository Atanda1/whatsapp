import { ref } from "../../../firebase";

const uploadData = ({ commit, dispatch }, form) => {
  commit("loadingStatus", true);
  const metadata = {
    contentType: form.image.type,
  };
  const name = +new Date() + "-" + form.image;
  const task = ref.child(name).put(form.image, metadata);
  task
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      form.image = url;
    })
    .then(() => dispatch("signup", form));
};

export default uploadData;
