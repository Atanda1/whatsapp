import { firebase } from '@firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

// firebase init - add your own config here
const firebaseConfig = {
	apiKey: process.env.VUE_APP_APIKEY,
    authDomain: process.env.VUE_APP_AUTHDOMAIN,
    projectId: process.env.VUE_APP_PROJECTID,
    databaseURL: process.env.VUE_APP_DATABASEURL,
    storageBucket: process.env.VUE_APP_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_SENDERID,
    appId: process.env.VUE_APP_APPID,
    measurementId: process.env.VUE_APP_MEASUREMENTID
}

firebase.initializeApp(firebaseConfig);

// utils
const auth = firebase.auth();
const dbf = firebase.firestore();
const db = firebase.database();
const ref = firebase.storage().ref();
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
  ref,
  provider
//   usersCollection,
//   postsCollection,
//   commentsCollection,
//   likesCollection
}