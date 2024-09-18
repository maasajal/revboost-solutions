import Address from "./ContactUsComponent/Address";
import Banner from "./ContactUsComponent/Banner";
import FAQ from "./HomeComponent/FAQ";

 

 

const Home = () => {
    return (
        <div className="">
            <FAQ />
            <Banner></Banner>
            <Address></Address>
        </div>
    );
};

export default Home;