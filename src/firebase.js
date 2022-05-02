import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCJWTqJIHeIwlAamsstHir3wBAoWThHh2k",
  authDomain: "contacts-a76a5.firebaseapp.com",
  databaseURL: "https://contacts-a76a5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contacts-a76a5",
  storageBucket: "contacts-a76a5.appspot.com",
  messagingSenderId: "295768109039",
  appId: "1:295768109039:web:a0bc045144e087dfee501a",
  measurementId: "G-X4W4KV3X0M"
};

const app = initializeApp(firebaseConfig);

export default app;