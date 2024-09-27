import { FirebaseError } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import axios from "axios";
import { auth } from "../../../firebase/firebase.config";
import { AppDispatch } from "../../store/store";
import { loginFailure, loginStart, loginSuccess } from "./authSlice";

interface UserData {
  name: string | null;
  email: string | null;
  photo: string | null;
}
// Login Function
export const loginWithGoogle = () => async (dispatch: AppDispatch) => {
  // AppDispatch টাইপ ব্যবহার করুন
  dispatch(loginStart());
  const provider = new GoogleAuthProvider(); // GoogleAuthProvider এর একটি ইনস্ট্যান্স তৈরি করুন

  try {
    const result = await signInWithPopup(auth, provider);

    const name = result.user.displayName;
    const email = result.user.email;
    const photo = result.user.photoURL;
    const data: UserData = { name, email, photo };

    const response = await axios.post(`${import.meta.env.VITE_API}/api/v1/login`, data);
    console.log(response.data) // এখান থেকে টোকেন নিয়ে কাজ্ করতে পারেন
    dispatch(loginSuccess({ user: result.user })); // ইউজার তথ্য পাঠান 
  } catch (error) {
    if (error instanceof FirebaseError) {
      dispatch(loginFailure({ error: error.message })); // FirebaseError হলে ত্রুটি পাঠান
    } else {
      dispatch(loginFailure({ error: "An unknown error occurred." })); // অজানা ত্রুটি পাঠান
    }
  }
};


export const signInWithUserPassword = async (data:object)=>{
  console.log(data)

  // try {
  //   const result = await createUserWithEmailAndPassword(auth, email, password)
  // } catch (error) {
  //   //
  // }
}