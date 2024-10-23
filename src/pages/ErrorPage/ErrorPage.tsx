import { IoHome } from "react-icons/io5";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import picture from "../../assets/errorpage/404 error lost in space-cuate.svg";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f4d4cf]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error 404 - Page not found!</title>
        <meta
          name="description"
          content="Company income & expense tracking, comparison live revenue growth over time. Calculate VAT & TAX, create financial reports, payroll management, invoicing & billing services for a company"
        />
      </Helmet>
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <img src={picture} className="w-96" alt="" />
          <p className="text-gray-700 ">Here are some helpful links:</p>

          <div className="flex items-center justify-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <button
              onClick={() => navigate(-1)}
              className="bg-[#f46653] hover:bg-opacity-90 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <MdKeyboardBackspace />
            </button>

            <button
              onClick={() => navigate("/")}
              className="bg-[#f46653] hover:bg-opacity-90 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              <IoHome />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
