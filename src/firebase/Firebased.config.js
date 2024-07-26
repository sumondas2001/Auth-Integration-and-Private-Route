// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyDgWqx8BAVuzAaHecVvyB-sCbE7b1J7CpY",
     authDomain: "auth-integration-private-f07a1.firebaseapp.com",
     projectId: "auth-integration-private-f07a1",
     storageBucket: "auth-integration-private-f07a1.appspot.com",
     messagingSenderId: "572915447040",
     appId: "1:572915447040:web:8bbe039a8d01302dd92fe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
