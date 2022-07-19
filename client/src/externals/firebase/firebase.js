import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB-IdzAx23jvurpqEwI26cuQk48bylXipU",
    authDomain: "zomato-clone-f3b26.firebaseapp.com",
    projectId: "zomato-clone-f3b26",
    storageBucket: "zomato-clone-f3b26.appspot.com",
    messagingSenderId: "220914816401",
    appId: "1:220914816401:web:512c2a32bfc5d1d6a4b630"
  };


// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export default provider;