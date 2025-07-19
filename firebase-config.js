// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyDLXt8U--gUtUB2beHuppW71bbFS7Ir0-M",

  authDomain: "hosp-4fe6a.firebaseapp.com",

  databaseURL: "https://hosp-4fe6a-default-rtdb.firebaseio.com",

  projectId: "hosp-4fe6a",

  storageBucket: "hosp-4fe6a.firebasestorage.app",

  messagingSenderId: "875936617731",

  appId: "1:875936617731:web:426ac0b65a80c925fa8536",

  measurementId: "G-TY8JF71P6D"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };