import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE7L5U8fVz9_WHVnotv6amjC5_5Sik-qE",
  authDomain: "fir-83674.firebaseapp.com",
  databaseURL: "https://fir-83674-default-rtdb.firebaseio.com",
  projectId: "fir-83674",
  storageBucket: "fir-83674.appspot.com",
  messagingSenderId: "160253671513",
  appId: "1:160253671513:web:55e4ef8d3d3001996f9948",
  measurementId: "G-NPZXJTNS5J"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};

 