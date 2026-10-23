
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCK0lwWGDhnOfCLVYuzqilTIwMLGAO5tOE",
  authDomain: "miniblogvespertino.firebaseapp.com",
  projectId: "miniblogvespertino",
  storageBucket: "miniblogvespertino.firebasestorage.app",
  messagingSenderId: "139961841615",
  appId: "1:139961841615:web:4d011c70e9d2d91b9544ba"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};