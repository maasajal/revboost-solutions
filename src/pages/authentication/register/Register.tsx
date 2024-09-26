import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegEye } from "react-icons/fa";
import { TbEyeClosed } from "react-icons/tb";
import moneyHome from "../../../assets/signup/MoneyHome-SignUp.png";
import SocialLogin from "../../../components/SocialLogin";

type Inputs = {
  companyName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
 
  const onSubmit: SubmitHandler<Inputs> = (data) => { 
    const { password, confirmPassword } = data;
    if (password !== confirmPassword)
      return toast.error("Password not matched.");
    toast.success("Account created Successfully.");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }; 
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
            className="w-3/4 lg:w-full mt-10 -mb-12 lg:mb-0 lg:ml-20 lg:-mr-40 z-10"
          />
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 bg-white p-10 lg:pl-40 flex flex-col justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Create Account
            </h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                type="text"
                placeholder="Company Name"
                className="input input-bordered w-full"
                {...register("companyName", { required: true })}
              />
              {errors.companyName && (
                <small className="text-red-400 mt-2">
                  This field is required
                </small>
              )}
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <small className="text-red-400 mt-2">
                  This field is required
                </small>
              )}
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex items-center relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered w-full"
                  {...register("password", { required: true })}
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
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword && (
                <small className="text-red-400 mt-2">
                  This field is required
                </small>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-[#FF6B6B] hover:bg-[#FF5252] text-white w-full">
                Create Account
              </button>
            </div>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <span className="text-[#FF6B6B] cursor-pointer underline">
                Login
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
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
