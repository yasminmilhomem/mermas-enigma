// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import * as firestore from "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAGE1ICqmXhD-66eF3j-akx-DjBS2vU17U",
  authDomain: "md-enigma.firebaseapp.com",
  projectId: "md-enigma",
  storageBucket: "md-enigma.appspot.com",
  messagingSenderId: "257115614554",
  appId: "1:257115614554:web:f68422fc1c326622821763",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const db = firestore.initializeFirestore(firebase, {
  experimentalForceLongPolling: true,
});

console.log("Conectado ao Firebase!");

export { firestore };
