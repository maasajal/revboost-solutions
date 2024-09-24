import moneyHome from "../../../assets/signup/MoneyHome-SignUp.png";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Section */}
        <div className="flex-1 bg-[#FF08008C] flex flex-col items-center pt-10 ">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#ffffff] to-[#FF0000] inline-block text-transparent bg-clip-text">
            RevBoost
          </h1>
          <p className="text-lg text-white">
            A Modern Revenue Generation Platform
          </p>
          <img
            src={moneyHome}
            alt="Money Home"
            className="w-3/4 mt-10 -mb-12 lg:mb-0 lg:ml-40 lg:-mr-40 z-10"
          />
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 bg-white p-10 lg:pl-40 flex flex-col justify-center">
          <form className="w-full">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Welcome back
            </h2>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-[#FF6B6B] hover:bg-[#FF5252] text-white w-full">
                Sign in
              </button>
            </div>

            <p className="text-center mt-4">
              Don't have an account?{" "}
              <span className="text-[#FF6B6B] cursor-pointer underline">
                Register
              </span>
            </p>
          </form>

          {/* Divider */}
          <div className="flex items-center py-6 space-x-1">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="px-3 text-sm text-gray-600">or</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-center gap-4">
            <button className="bg-white border border-gray-300 flex items-center justify-center gap-x-3 text-sm sm:text-base rounded-lg hover:bg-gray-100 duration-300 transition-colors px-8 py-2.5">
              <FcGoogle className="text-2xl" />
              <span>Sign in with Google</span>
            </button>
            <button className="bg-black text-white flex items-center justify-center gap-x-3 text-sm sm:text-base rounded-lg hover:bg-black/80 duration-300 transition-colors px-8 py-2.5">
              <FaGithub className="text-2xl" />
              <span>Sign in with Github</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
