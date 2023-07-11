// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXzISjd0FV3fsaElQkTF1H_QLc3aGisuI",
    authDomain: "mt-blog-project.firebaseapp.com",
    projectId: "mt-blog-project",
    storageBucket: "mt-blog-project.appspot.com",
    messagingSenderId: "717894823551",
    appId: "1:717894823551:web:bd2e26c419336c9dfd994a",
    measurementId: "G-P09T46FNEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);