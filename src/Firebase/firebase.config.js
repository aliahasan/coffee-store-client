// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCybLdMcOfvlbK-S3cY5HfMPIF7i8UJXiw",
  authDomain: "coffee-store-23931.firebaseapp.com",
  projectId: "coffee-store-23931",
  storageBucket: "coffee-store-23931.appspot.com",
  messagingSenderId: "840826986147",
  appId: "1:840826986147:web:244bcf30071cdf99ef6916"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth