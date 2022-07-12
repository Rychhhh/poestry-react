import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAspQxaMZvC3WU-vkJPR29MSN3TOIM0x0M",
  authDomain: "socialme-664d2.firebaseapp.com",
  projectId: "socialme-664d2",
  storageBucket: "socialme-664d2.appspot.com",
  messagingSenderId: "953168230079",
  appId: "1:953168230079:web:3ba786da8e85b57c17f80a",
  measurementId: "G-GM8F5SKWBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider  = new GoogleAuthProvider();