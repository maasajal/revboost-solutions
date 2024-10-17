import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setUser } from "../app/features/firebaseAuthentication/authSlice";
import { auth } from "../firebase/firebase.config";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/footer/Footer";
// import { ComplexNavbar } from "../pages/Shared/Navbar/ComplexNavbar";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ user })); // ইউজার তথ্য পাঠান
      } else {
        dispatch(setUser(null)); // ইউজার না থাকলে null পাঠান
      }
    });

    return () => unsubscribe(); // ক্লিন আপ ফাংশন
  }, [dispatch, auth]);

  return (
    <div>
      <Navbar />
      {/* <ComplexNavbar /> */}
      <main className="font-roboto">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Main;
