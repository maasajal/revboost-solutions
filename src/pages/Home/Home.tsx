import FAQ from "./HomeComponent/FAQ";
import UnlockBusiness from "./HomeComponent/UnlockBusiness";

const Home = () => {
  return (
    <div className="space-y-20">
      <UnlockBusiness />
      <FAQ />
    </div>
  );
};

export default Home;
