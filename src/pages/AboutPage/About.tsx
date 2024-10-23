// import PageCover from "../../components/PageCover";
import { Link } from "react-router-dom";
import coverPhoto from "../../assets/AboutUs/cover.png";
import whyChooseUsPhoto from "../../assets/AboutUs/whyChooseUS.png";
import TeamMembers from "../Shared/TeamMembers/TeamMembers";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/SectionTitle";

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
      <section>
        <SectionTitle
          title="STREAMLINING FINACIAL CLARITY FOR BUSSINESS GROWTH"
          intro="Learn about us"
          content="ABOUT US"
        />
        <div className=" flex flex-col justify-center p-6 mx-auto sm:py-8 lg:py-20 lg:flex-row lg:justify-around">
          <div className="flex items-center justify-center p-6 mt-4 lg:mt-0 h-96 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={coverPhoto}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col space-y-4 justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
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
            <p className="dark:text-gray-600 text-center">
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
      <section className="p-6 my-6 bg-gray-100 dark:text-gray-800">
        <SectionTitle
          title="GLOBAL SERVICES AND SATISFIED CLIENS"
          intro="Trusted Worldwide"
          content="Clients, Projects, and Global Reach"
        />
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 dark:text-gray-100"
              >
                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">1200 +</p>
              <hr className="border-red-400 border-2" />
              <p className="capitalize">Total Client</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 dark:text-gray-100"
              >
                <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">50 +</p>
              <hr className="border-red-400 border-2" />
              <p className="capitalize">Country Services</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 dark:text-gray-100"
              >
                <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                <rect width="32" height="32" x="80" y="264"></rect>
                <rect width="32" height="32" x="240" y="128"></rect>
                <rect width="32" height="32" x="136" y="168"></rect>
                <rect width="32" height="32" x="400" y="264"></rect>
                <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">4000 +</p>
              <hr className="border-red-400 border-2" />
              <p className="capitalize">Total Project</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-red-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 dark:text-gray-100"
              >
                <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">1500 +</p>
              <hr className="border-red-400 border-2" />
              <p className="capitalize">Total Reviews</p>
            </div>
          </div>
        </div>
      </section>

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
