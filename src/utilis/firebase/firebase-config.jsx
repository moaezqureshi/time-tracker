import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQpu8YkD6b17tfgKP7tSvzpxoY1gmP0nc",
    authDomain: "time-tracker-2c4e2.firebaseapp.com",
    projectId: "time-tracker-2c4e2",
    storageBucket: "time-tracker-2c4e2.appspot.com",
    messagingSenderId: "1084541498815",
    appId: "1:1084541498815:web:3debb231eae6b67247dd0a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const authentication = getAuth(app);