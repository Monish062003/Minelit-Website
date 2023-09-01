// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVaHMmmaN_tLIbE1G4xYoodO7AXWWE_dQ",
  authDomain: "minelitlogin.firebaseapp.com",
  databaseURL: "https://minelitlogin-default-rtdb.firebaseio.com",
  projectId: "minelitlogin",
  storageBucket: "minelitlogin.appspot.com",
  messagingSenderId: "61646284251",
  appId: "1:61646284251:web:33caeb5d67b093c077b3fe"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};