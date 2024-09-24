import moneyHome from "../../../assets/signup/MoneyHome-SignUp.png";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="bg-[#FF08008C]">
      <div className="hero border border-green-400 py-10">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <div>
              <h1 className="text-5xl font-bold">RevBoost</h1>
              <p className="py-6">A Modern Revenue Generation Platform</p>
            </div>
            <img src={moneyHome} alt="" className="w-3/4" />
          </div>

          {/* form */}
          <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl py-8 px-20">
            <form className="card-body p-0">
              <h3 className="mb-10">Create Account</h3>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Create Account</button>
              </div>
              <p>
                Already have an account?{" "}
                <span className="underline cursor-pointer">login</span>{" "}
              </p>
            </form>

            {/* social */}
            <div className="flex items-center py-8 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
              <p className="px-3 text-sm text-gray-600">
                or Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <button className="bg-white flex items-center text-gray-700 justify-center gap-x-3 text-sm sm:text-base rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-[30px] py-2.5">
                <FcGoogle className="size-6" />
                <span>Sign in with Google</span>
              </button>

              <button className="bg-black rounded-lg text-sm sm:text-base flex items-center gap-x-3 justify-center text-white hover:bg-black/80 duration-300 transition-colors border border-transparent px-8 py-2.5">
                <FaGithub className="size-6" />
                <span>Sign in with Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
