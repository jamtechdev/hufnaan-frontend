import firebase from 'firebase';
import "firebase/auth";
import config from '../../config'
firebase.initializeApp(config.firebase);
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export default firebase;