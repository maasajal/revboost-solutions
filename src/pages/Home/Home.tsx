import Banner from "./HomeComponent/Banner";
import FAQ from "./HomeComponent/FAQ";
import Testimonials from "./HomeComponent/Testimonials";
import UnlockBusiness from "./HomeComponent/UnlockBusiness";

const Home = () => {
  return (
    <div className="space-y-20">
      <Banner></Banner>
      <UnlockBusiness />
      <Testimonials></Testimonials>
      <FAQ />
    </div>
  );
};

export default Home;
