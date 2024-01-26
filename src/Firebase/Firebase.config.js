// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9OiR3pPrq7UGfTea27UwGe_wuLm8QSaA",
  authDomain: "tradeswift-39be5.firebaseapp.com",
  projectId: "tradeswift-39be5",
  storageBucket: "tradeswift-39be5.appspot.com",
  messagingSenderId: "118588040302",
  appId: "1:118588040302:web:87bdfac3cab499baee327f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth