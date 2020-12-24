
import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const  firebaseConfig = {
    apiKey: "AIzaSyDau3TE2iI9nVnZktCUQ07bcX7Ulmf1AGQ",
    authDomain: "react-apps-143cc.firebaseapp.com",
    projectId: "react-apps-143cc",
    storageBucket: "react-apps-143cc.appspot.com",
    messagingSenderId: "868512409642",
    appId: "1:868512409642:web:a9e1979689b0cd6d857b53",
    measurementId: "G-01QK4JS8D1"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
    db,
    googleAuthProvider,
    firebase,
  }
