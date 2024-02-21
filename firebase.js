// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAGvFDcNdKMWZqJr4nA9a6EBPFaCLqbqw",
  authDomain: "firstaid-80353.firebaseapp.com",
  databaseURL: "https://firstaid-80353-default-rtdb.firebaseio.com",
  projectId: "firstaid-80353",
  storageBucket: "firstaid-80353.appspot.com",
  messagingSenderId: "744395963298",
  appId: "1:744395963298:web:4c5345349ba1754e5890fb"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth initialization
export const auth = getAuth(app);

// db initialization

export const database=getDatabase(app);
