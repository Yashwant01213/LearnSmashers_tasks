import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAePftn3MEONuB6TNbX9NC1lWxySEsh4mQ",
  authDomain: "chat-dfd42.firebaseapp.com",
  projectId: "chat-dfd42",
  storageBucket: "chat-dfd42.appspot.com",
  messagingSenderId: "378496817218",
  appId: "1:378496817218:web:8471853ae3553eb1b9f5db",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
