import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDaKKHj461xxJYFwyh-UtIMjyjYvn2BfEA",
  authDomain: "mariana-tienda.firebaseapp.com",
  projectId: "mariana-tienda",
  storageBucket: "mariana-tienda.appspot.com",
  messagingSenderId: "47594452460",
  appId: "1:47594452460:web:d52ba323327aa42a967cc9"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;