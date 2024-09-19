import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-2 md:px-5 font-roboto h-screen">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Main;
