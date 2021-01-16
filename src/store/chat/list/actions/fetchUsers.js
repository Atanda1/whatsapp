import { auth, dbf } from "../../../../firebase";
import Vue from "vue";

const fetchUsers = ({ commit }) => {
  dbf
    .collection("users")
    .get()
    .then((querySnapshot) => {
      const usersArray = [];
      const newUsersArray = [];
      querySnapshot.docs.map((doc) => {
          usersArray.push(doc.data());
          console.log(doc.data());
        
      });
      console.log(usersArray)
      for (let users of usersArray) {        
        if(users.uid === auth.currentUser.uid) continue
        newUsersArray.push(users);
      }
      commit("setUsers", newUsersArray);
    })
    .catch((err) => {
      Vue.toasted.show(err, {
        position: "top-right",
        duration: 4000,
      });
    });
};

export default fetchUsers;
