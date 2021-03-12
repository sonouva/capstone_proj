import { firebase } from "@firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-iZEBgJlEJ-6nrz4c6TE0l7iSiK9TW-A",
  authDomain: "pcmob-fp.firebaseapp.com",
  projectId: "pcmob-fp",
  storageBucket: "pcmob-fp.appspot.com",
  messagingSenderId: "859506954995",
  appId: "1:859506954995:web:f44978eebbfa8aeff59d86",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
