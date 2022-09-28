// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUvIHW-i6cHV1x5YzkL1wLjhO30cRbYIU",
  authDomain: "blog-my-life.firebaseapp.com",
  projectId: "blog-my-life",
  storageBucket: "blog-my-life.appspot.com",
  messagingSenderId: "187215319601",
  appId: "1:187215319601:web:c33f3a7b4c2f1533fc3b10",
  measurementId: "G-8MFBECB1TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)

 
