import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegEye } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginWithEmailPassword } from "../../../app/features/firebaseAuthentication/authActions";
import { AppDispatch } from "../../../app/store/store";
import moneyHome from "../../../assets/signup/MoneyHome-SignUp.png";
import SocialLogin from "../../../components/SocialLogin";
import logo from "../../../assets/logo.png";
import { Helmet } from "react-helmet";
import { TextField } from "@mui/material";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(loginWithEmailPassword(data));

    toast.success("Sign in Successful.");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login - RevBoost Solutions</title>
        <meta
          name="description"
          content="Access your RevBoost Solutions account to manage your business's revenue, expenses, and financial growth. Log in to unlock powerful tools for boosting profitability and tracking financial performance."
        />
      </Helmet>
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Section */}
        <div className="flex-1 bg-[#FF08008C] flex flex-col items-center pt-10 ">
          <img src={logo} alt="logo" className="w-1/3 2xl:w-1/4" />
          <p className="text-lg text-white">
            A Modern Revenue Generation Platform
          </p>
          <img
            src={moneyHome}
            alt="Money Home"
            className="w-3/4 mt-10 lg:ml-40 lg:-mr-40 z-10 2xl:w-1/2 2xl:ml-80 2xl:-mr-80"
          />
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 bg-white p-10 lg:pl-40 xl:py-32 2xl:pr-40 2xl:py-52 flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Welcome back
            </h2>

            <div className="form-control mt-4">
               <TextField
                  className="w-full"
                  label="Email"
                  type="email"
                  {...register("email", { required: true })}
                  error={!!errors.email}
                  helperText={errors.email ? "email is required" : ""}
                />
              {errors.email && (
                <small className="text-red-400 mt-2">
                  Email field is required
                </small>
              )}
            </div>

            <div className="form-control mt-4">
              <div className="flex items-center relative">
                 <TextField
                  className="w-full"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  error={!!errors.password}
                  helperText={errors.password ? "password is required" : ""}
                />
                <div
                  className="absolute right-0 mr-4 *:size-5 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <TbEyeClosed /> : <FaRegEye />}
                </div>
              </div>
              {errors.password && (
                <small className="text-red-400 mt-2">
                  This field is required
                </small>
              )}
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
              <Link to="/register">
                <span className="text-[#FF6B6B] cursor-pointer underline">
                  Register
                </span>
              </Link>
            </p>
          </form>

          {/* Divider */}
          <div className="flex items-center py-6 space-x-1">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="px-3 text-sm text-gray-600">or</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Social Login */}
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
