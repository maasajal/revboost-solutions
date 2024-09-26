 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjvu_boF7f_IHQK3RROYgHXtz3jL9zJKg",
  authDomain: "revbootssolutions.firebaseapp.com",
  projectId: "revbootssolutions",
  storageBucket: "revbootssolutions.appspot.com",
  messagingSenderId: "1035005031245",
  appId: "1:1035005031245:web:032342e2022d50596bbd04"
};

 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);