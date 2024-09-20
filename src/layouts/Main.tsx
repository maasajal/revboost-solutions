import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <main className="font-roboto px-2 md:px-4 lg:px-6">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Main;
