
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATUj6s7JJFm6RYH5s6V0U7ZmPD9tz2RzE",
  authDomain: "docs-clone-4a51a.firebaseapp.com",
  projectId: "docs-clone-4a51a",
  storageBucket: "docs-clone-4a51a.appspot.com",
  messagingSenderId: "793230425535",
  appId: "1:793230425535:web:02b4bdaa8082ef38eff50a",
  measurementId: "G-HNRL58SJ7B"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)