// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNCeqoESFRuuhs7h76_7aAdrUYNdRxETk",
  authDomain: "anonymous-by-yemi.firebaseapp.com",
  projectId: "anonymous-by-yemi",
  storageBucket: "anonymous-by-yemi.appspot.com",
  messagingSenderId: "477658420639",
  appId: "1:477658420639:web:acd68bf9e7afcdd63759aa",
  measurementId: "G-7RPGSNRTEE"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);