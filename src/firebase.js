import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJRODI6l10A8jmSUGBBDxqKwjsRR5ijBU",
  authDomain: "whatsapp-clone-ef693.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-ef693-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-ef693",
  storageBucket: "whatsapp-clone-ef693.appspot.com",
  messagingSenderId: "235563324075",
  appId: "1:235563324075:web:93c615e9ca49a887cfddee",
  measurementId: "G-GBLD9PQNVT"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
