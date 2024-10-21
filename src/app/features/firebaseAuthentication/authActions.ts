import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../../../firebase/firebase.config";
import { AppDispatch } from "../../store/store";
import { loginFailure, loginStart, loginSuccess } from "./authSlice";
import { axiosPublic } from "../../hooks/useAxiosPublic";

interface UserData {
  name: string | null;
  email: string | null;
  photo: string | null;
}

interface UserCredentials {
  name: string;
  email: string;
  password: string;
}

interface loginCredentials {
  email: string;
  password: string;
}

// Login Function
export const loginWithGoogle = () => async (dispatch: AppDispatch) => {
  // AppDispatch টাইপ ব্যবহার করুন
  dispatch(loginStart());
  const provider = new GoogleAuthProvider(); // GoogleAuthProvider এর একটি ইনস্ট্যান্স তৈরি করুন

  try {
    const result = await signInWithPopup(auth, provider);
    const name = result.user?.displayName;
    const email = result.user?.email;
    const photo = result.user?.photoURL;

    const userData: UserData = { name, email, photo };
    // await dispatch(createUser(userData));
    const response = await axiosPublic.post(`/register`, userData);
    localStorage.setItem("user-token", response.data.message);
    dispatch(loginSuccess({ user: result.user })); // ইউজার তথ্য পাঠান
    if (response.data.subscriptionStatus === "active") {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/pricing";
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      dispatch(loginFailure({ error: error.message })); // FirebaseError হলে ত্রুটি পাঠান
    } else {
      dispatch(loginFailure({ error: "An unknown error occurred." })); // অজানা ত্রুটি পাঠান
    }
  }
};

export const signInWithUserPassword =
  (formData: UserCredentials) => async (dispatch: AppDispatch) => {
    dispatch(loginStart());
    const { email, password, name } = formData;

    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        async (result) => {
          const response = await axiosPublic.post(`/register`, {
            email,
            password,
            name,
          });
          localStorage.setItem("user-token", response.data.message);
          dispatch(loginSuccess({ user: result.user }));
          if (response.data.subscriptionStatus === "active") {
            window.location.href = "/dashboard";
          } else {
            window.location.href = "/pricing";
          }
        }
      );
    } catch (error) {
      console.log("action to error", error);
    }
  };

export const loginWithEmailPassword =
  (formData: loginCredentials) => async (dispatch: AppDispatch) => {
    dispatch(loginStart());
    const { email, password } = formData;
    try {
      signInWithEmailAndPassword(auth, email, password).then(async (result) => {
        const response = await axiosPublic.post(`/register`, { email });
        localStorage.setItem("user-token", response.data.message);
        dispatch(loginSuccess({ user: result.user }));
        if (response.data.subscriptionStatus === "active") {
          window.location.href = "/dashboard";
        } else {
          window.location.href = "/pricing";
        }
      });
    } catch (error) {
      console.log("action to error", error);
    }
  };
