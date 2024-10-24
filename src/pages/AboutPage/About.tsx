// import PageCover from "../../components/PageCover";
import { Link } from "react-router-dom";
import coverPhoto from "../../assets/AboutUs/cover.png";
import whyChooseUsPhoto from "../../assets/AboutUs/whyChooseUS.png";
import TeamMembers from "../Shared/TeamMembers/TeamMembers";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/SectionTitle";
import ClientSatisfiction from "./ClientSatisfiction";

const About = () => {
  return (
    <div className="container mx-auto pb-24 px-2 md:px-4 lg:px-6">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us - RevBoost Solutions</title>
        <meta
          name="description"
          content="Discover how RevBoost Solutions helps businesses optimize revenue growth and manage expenses. Learn about our mission, team, and innovative tools designed to streamline financial success for companies of all sizes."
        />
      </Helmet>
      {/* <section className="contact_banner">
        <PageCover
          bgCoverImg=""
          heading="About Us"
          title="Know more About RevBoost Solutions"
          headingText="We would love to hear from you"
        />
      </section> */}
      <section className="w-[85%] mx-auto">
        <SectionTitle
          title="STREAMLINING FINACIAL CLARITY FOR BUSSINESS GROWTH"
          intro="Learn about us"
          content="ABOUT US"
        />
        <div className=" flex flex-col justify-center items-center mx-auto lg:flex-row lg:justify-around">
          <div className="items-center justify-center lg:mt-0 h-96 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={coverPhoto}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 rounded-[3%] xl:h-112 xl:rounded-[3%] 2xl:h-128 2xl:rounded-[3%]"
            />
          </div>
          <div className="flex-col space-y-4 justify-center p-6 text-center rounded-sm -mt-24 md:mt-10 lg:max-w-md xl:max-w-lg lg:text-left">
            <h2>Who are we?</h2>
            <p>
              Revboost offers a streamlined, automated approach to financial
              management, making it easier for businesses to track revenue
              growth, forecast future performance, and comply with tax
              regulations. This level of financial clarity and control can drive
              more strategic decision-making and ultimately contribute to the
              sustainable growth of the business.
            </p>
          </div>
        </div>
      </section>

      {/* <section>
        <h2>We provide best solution for your business </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>{" "}
        <div className="photo-grid">
          <div className="column">
            <img src="photo1.jpg" alt="Solution 1" />
            <img src="photo2.jpg" alt="Solution 2" />
          </div>
          <div className="column">
            <img src="photo3.jpg" alt="Solution 3" />
            <img src="photo4.jpg" alt="Solution 4" />
            <img src="photo5.jpg" alt="Solution 5" />
          </div>
        </div>
      </section> */}
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container px-6 py-12 mx-auto">
          <SectionTitle
            title="HOW REVBOOST DRIVERS FINANCIAL EFFICIENCY"
            intro="Our Solution"
            content="Solution For Your Bussiness"
          />
          <div className=" w-full mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <p className="dark:text-gray-600 text-center w-3/4 mx-auto">
              We're proposing to build a web-based platform, "RevBoost,"
              designed to help your business streamline and optimize its revenue
              generation processes. The platform will be developed using Next.js
              and TypeScript, two modern technologies known for their
              performance, scalability, and reliability.
            </p>
          </div>
          <div className="grid items-center gap-4 xl:grid-cols-3">
            <div className="p-6 xl:col-span-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  {/* demo */}

                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>
                      Revboost generates detailed tax reports, outlining the
                      total VAT collected and the taxes owed. This not only
                      saves hours of manual work for the accounting team but
                      also ensures compliance with local tax regulations.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?1"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Mr G</p>
                        <p className="text-sm dark:text-gray-600">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>
                      By reducing the risk of errors and potential fines, Aurora
                      provides peace of mind to business owners, knowing that
                      their tax filings are accurate and up-to-date.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?2"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Mr. X</p>
                        <p className="text-sm dark:text-gray-600">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>
                      This level of financial clarity and control can drive more
                      strategic decision-making and ultimately contribute to the
                      sustainable growth of the business.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Mr Chair Man</p>
                        <p className="text-sm dark:text-gray-600">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>
                      Revboost generates detailed tax reports, outlining the
                      total VAT collected and the taxes owed. This not only
                      saves hours of manual work for the accounting team but
                      also ensures compliance with local tax regulations.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?4"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Mr Y</p>
                        <p className="text-sm dark:text-gray-600">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-gray-50">
                    <p>
                      Revboost to accurately compute VAT for its invoices,
                      taking into account varying VAT rates for different
                      services. Additionally, Aurora generates detailed tax
                      reports, outlining the total VAT collected and the taxes
                      owed.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?4"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Mr T</p>
                        <p className="text-sm dark:text-gray-600">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ClientSatisfiction></ClientSatisfiction>
      <section className="shadow-lg rounded-2xl dark:bg-gray-100 dark:text-gray-800">
        <SectionTitle
          title="REVBOOST'S JOURNEY TO SIMPLIFY FINANCIAL MANAGEMENT"
          intro=" Evolving to Meet Your Financial Needs"
          content="How RevBoost is Transforming Financial Solutions"
        />
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-red-400">
                <h3 className="text-3xl font-semibold">Our Mission</h3>
                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                  Our mission is to provide the best solutions for...
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-red-200">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Mission A
                  </h3>
                  <span className="text-xs tracking-wide uppercase dark:text-gray-600">
                    Jul 2024
                  </span>
                  <p className="mt-3">
                    RevBoost Solutions is designed to be the all-in-one
                    financial management solution for businesses, simplifying
                    everything from daily financial tracking to complex tax and
                    VAT compliance.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-red-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Mission B
                  </h3>

                  <span className="text-xs tracking-wide uppercase dark:text-gray-600">
                    Jul 2025
                  </span>
                  <p className="mt-3">
                    RevBoost Solutions empowers businesses to track and analyze
                    their revenue growth effortlessly.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-red-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Mission C
                  </h3>
                  <span className="text-xs tracking-wide uppercase dark:text-gray-600">
                    Jul 2026
                  </span>
                  <p className="mt-3">
                    The goal of the Aurora solution is to provide a
                    comprehensive platform that simplifies various financial
                    management tasks for businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* <h2 className="text-center py-8">Why Choose Us</h2> */}
        <SectionTitle
          title="ADVENCED REVENUE GENERATION SOLUTIONS"
          intro="Why Chose Us"
          content="Skills, Strategy, and Results"
        />
        <div className="container px-6 py-16 mx-auto shadow-lg rounded-2xl bg-gray-100">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg space-y-4">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  {" "}
                  <span className="text-red-400 ">
                    With knowledge, skills <br />
                    and hard work
                  </span>
                </h2>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
                <h3 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  {" "}
                  <span className="text-blue-500 ">Your road to success</span>
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  The proposed research aims to develop an advanced Company
                  Revenue Generation Platform. To integrate key features like
                  lead management, sales tracking, and revenue analytics. To
                  explore the application of behavioral analytics in
                  micro-segmentation for targeted revenue generation strategies.
                </p>
                <Link to={`/pricing`}>
                  <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    Details
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src={whyChooseUsPhoto}
                alt="success"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <SectionTitle
          title="THE MINDS BEHIND REVBOOST"
          intro=" Driving Innovation and Success"
          content="Talented Developers, Dedicated to Excellence"
        />
        <TeamMembers></TeamMembers>
      </section>
    </div>
  );
};

export default About;
