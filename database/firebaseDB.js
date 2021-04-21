import { firebase } from "@firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1rEIbjdrCZarLRStZv7lGAY180Vxck1g",
  authDomain: "app7-a65f6.firebaseapp.com",
  projectId: "app7-a65f6",
  storageBucket: "app7-a65f6.appspot.com",
  messagingSenderId: "490976261630",
  appId: "1:490976261630:web:4c6058a7d0251a73b6bcaf",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
