import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'
import 'firebase/storage'
firebase.initializeApp({
//  ur key
})
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database = {
  users: firestore.collection('users'),
  posts: firestore.collection('posts'),
  comments: firestore.collection('comments'),
  getCurrentTimeStamp: firebase.firestore.FieldValue.serverTimestamp,
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  }
}
// 1. get firebase storage 
export const storage = firebase.storage();
export default firebase;



