// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu-Mr9QE52PG6bq6xVGTz82cwssx8S2kM",
  authDomain: "anonymous-messaging-app-d29ce.firebaseapp.com",
  projectId: "anonymous-messaging-app-d29ce",
  storageBucket: "anonymous-messaging-app-d29ce.appspot.com",
  messagingSenderId: "97635209224",
  appId: "1:97635209224:web:0d25ae4e2bc0d2e24b41bd",
  measurementId: "G-X5GBFS61DM"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);