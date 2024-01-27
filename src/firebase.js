// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2QZPHGS3TyYa2nCtojMBMjnoXPZDLO64",
  authDomain: "ytmusic-clone-85a3c.firebaseapp.com",
  projectId: "ytmusic-clone-85a3c",
  storageBucket: "ytmusic-clone-85a3c.appspot.com",
  messagingSenderId: "240226899374",
  appId: "1:240226899374:web:267773e4154fd51690a43f",
  measurementId: "G-P85Z5VSCM7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
