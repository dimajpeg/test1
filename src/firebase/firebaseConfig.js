// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBIyIcHDPHUHf6QEO0TByfWogW8RPnFh-0",
    authDomain: "word-program-learn.firebaseapp.com",
    projectId: "word-program-learn",
    storageBucket: "word-program-learn.appspot.com",
    messagingSenderId: "856461610320",
    appId: "1:856461610320:web:eb3251b5bce0ff3680f055",
    measurementId: "G-M46C9SS2RT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
