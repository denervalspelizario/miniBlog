
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firebase' // importando o firestore

const firebaseConfig = {
  apiKey: "AIzaSyCpqOc4_bSKNyg_Vmojd5nztKYtDDZMzSk",
  authDomain: "miniblog-2f7d5.firebaseapp.com",
  projectId: "miniblog-2f7d5",
  storageBucket: "miniblog-2f7d5.appspot.com",
  messagingSenderId: "846009797333",
  appId: "1:846009797333:web:d682f779e6646d7a50705c"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app) // chamando o banco de dados firestore do firebase e jogando em db, obs: nao esquecer de importar

export { db };  // exprotando o db 