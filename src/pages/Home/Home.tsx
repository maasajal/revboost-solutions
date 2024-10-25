import Banner from "./HomeComponent/Banner";
import FAQ from "./HomeComponent/FAQ";
import Sectors from "./HomeComponent/Sectors";
// import Testimonials from "./HomeComponent/Testimonials";
import UnlockBusiness from "./HomeComponent/UnlockBusiness";
import { Helmet } from "react-helmet";
import UserFeedback from "./HomeComponent/UserFeedback";

const Home: React.FC = () => {
  return (
    <div className="space-y-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - RevBoost Solutions</title>
        <meta
          name="description"
          content="RevBoost Solutions is a modern revenue generation platform helping businesses optimize revenue growth, track expenses, and manage payroll. Automate income tracking, VAT & tax calculations, forecasting, and billing with ease."
        />
      </Helmet>
      <Banner></Banner>
      <UnlockBusiness />
      {/* <Testimonials></Testimonials> */}
      <UserFeedback></UserFeedback>
      <Sectors></Sectors>
      <FAQ />
    </div>
  );
};

export default Home;
