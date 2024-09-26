import { FaXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../app/state/firebaseAuthentication/authActions";
import { AppDispatch } from "../app/store/store";
const SocialLogin = () => {
  const dispatch = useDispatch<AppDispatch>(); // টাইপড useDispatch ব্যবহার করুন

  return (
    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-center gap-4">
      <button
        onClick={() => dispatch(loginWithGoogle())}
        className="bg-white border border-gray-300 flex items-center justify-center gap-x-3 text-sm sm:text-base rounded-lg hover:bg-gray-100 duration-300 transition-colors px-8 py-2.5"
      >
        <FcGoogle className="text-2xl" />
        <span>Sign up with Google</span>
      </button>
      <button className="bg-black text-white flex items-center justify-center gap-x-3 text-sm sm:text-base rounded-lg hover:bg-black/80 duration-300 transition-colors px-8 py-2.5">
        <FaXTwitter className="text-2xl" />
        <span>Sign up with Twitter</span>
      </button>
    </div>
  );
};

export default SocialLogin;
