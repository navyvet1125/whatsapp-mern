// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGeY3p5YgRz15fAP96ybZ5U7Y2tk001DA",
  authDomain: "whatsapp-mern-d1906.firebaseapp.com",
  projectId: "whatsapp-mern-d1906",
  storageBucket: "whatsapp-mern-d1906.appspot.com",
  messagingSenderId: "1021876863356",
  appId: "1:1021876863356:web:79e6dfb0651e277d91e4f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = app;