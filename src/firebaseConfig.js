// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBIQ7z5nZyiJnyEEyz8yI5h-AiLXCORx0",
  authDomain: "assign-1dc2c.firebaseapp.com",
  projectId: "assign-1dc2c",
  storageBucket: "assign-1dc2c.appspot.com",
  messagingSenderId: "987553341050",
  appId: "1:987553341050:web:32f7be73f10362508c25c3",
  measurementId: "G-2NRW3J3679",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
