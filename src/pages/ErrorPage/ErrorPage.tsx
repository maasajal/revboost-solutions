import { Link } from "react-router-dom";
import image from "./noun-404-20804.svg";
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div>
                <img src={image} alt="" className="w-96 h-96" />
                <div className="mt-5 md:mt-10 font-bold text-3xl flex flex-col md:flex-row justify-center gap-1 md:gap-2 px-3 md:px-0">
                    <p className="font-medium text-lg md:font-bold md:text-3xl">Your requested page is not found.</p>
                    Return to
                    <p className="text-blue-600 hover:underline font-medium ml-0 md:ml-0 w-1/3 md:w-auto">
                        <Link to='/'>Home</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;