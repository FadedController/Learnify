import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBu_WAdjkeMYkcUsUN2sJRTro5c6IEArf8",
  authDomain: "learnify-edu.firebaseapp.com",
  projectId: "learnify-edu",
  storageBucket: "learnify-edu.appspot.com",
  messagingSenderId: "326733236642",
  appId: "1:326733236642:web:8b1d3bb94f1ed2de3d8afb",
  measurementId: "G-0L0GM2ZB6X",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, firestore, auth, storage };
