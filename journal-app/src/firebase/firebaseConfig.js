
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

  const firebaseConfigTesting = {
    apiKey: "AIzaSyCv1lzdzAPWBhQ3nTqPWrDe7C0pjKa0uRI",
    authDomain: "pushnotifications-cd953.firebaseapp.com",
    databaseURL: "https://pushnotifications-cd953.firebaseio.com",
    projectId: "pushnotifications-cd953",
    storageBucket: "pushnotifications-cd953.appspot.com",
    messagingSenderId: "731203614350",
    appId: "1:731203614350:web:40e0ff0b1184fe28503bdf",
    measurementId: "G-FBYGCHP854"
  };

  if(process.env.NODE_ENV === 'test'){
    // testing firebaseConfigTesting
    firebase.initializeApp(firebaseConfigTesting);
  }
  else{
    //productions or delevopmen
    firebase.initializeApp(firebaseConfig);
  }
  

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
    db,
    googleAuthProvider,
    firebase,
  }
