import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKq_1iqGaa9NLK_u53mGT1a49PpSaRuVI",
  authDomain: "facebook-clone-by-erlan.firebaseapp.com",
  projectId: "facebook-clone-by-erlan",
  storageBucket: "facebook-clone-by-erlan.appspot.com",
  messagingSenderId: "39071665078",
  appId: "1:39071665078:web:ba8ccc758c9c5a42f50f17",
  measurementId: "G-SGDYESY74D",
};

// initialize our app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initial database
const db = firebaseApp.firestore();

// set auth
const auth = firebase.auth();

// set provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
