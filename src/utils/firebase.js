// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByEd5iUS7K-nV8Nc9pQeSDmV_iO8xQr2A",
  authDomain: "movix-app-d0698.firebaseapp.com",
  projectId: "movix-app-d0698",
  storageBucket: "movix-app-d0698.firebasestorage.app",
  messagingSenderId: "958387508208",
  appId: "1:958387508208:web:cce31bd5c5bc5bb6834335"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();