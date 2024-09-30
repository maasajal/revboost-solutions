import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import Banner from "./HomeComponent/Banner";
import FAQ from "./HomeComponent/FAQ";
import Sectors from "./HomeComponent/Sectors";
import Testimonials from "./HomeComponent/Testimonials";
import UnlockBusiness from "./HomeComponent/UnlockBusiness";

const Home = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user)

  return (
    <div className="space-y-20">
      <Banner></Banner>
      <UnlockBusiness />
      <Testimonials></Testimonials>
      <Sectors></Sectors>
      <FAQ />
    </div>
  );
};

export default Home;
