import { firebase } from '@firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/database'

// firebase init - add your own config here
const firebaseConfig = {
	apiKey: process.env.VUE_APP_APIKEY,
    authDomain: "whatsapp-clone-42b4f.firebaseapp.com",
    projectId: "whatsapp-clone-42b4f",
    storageBucket: "whatsapp-clone-42b4f.appspot.com",
    messagingSenderId: "51012903476",
    appId: "1:51012903476:web:abd443a8ff094d807fe061",
    measurementId: "G-QFG330B17J"
}

firebase.initializeApp(firebaseConfig);

// utils
const auth = firebase.auth();
const dbf = firebase.firestore();
const db = firebase.database();
var provider = new firebase.auth.GoogleAuthProvider();
// collection references
// const usersCollection = db.collection('users')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  dbf,
  provider
//   usersCollection,
//   postsCollection,
//   commentsCollection,
//   likesCollection
}