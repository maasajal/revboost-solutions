import About from "../AboutPage/About";
import Contact from "../ContactPage/Contact";
import FAQ from "./HomeComponent/FAQ";

const Home = () => {
  return (
    <div className="space-y-20">
      <FAQ />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
