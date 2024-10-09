import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../../../src/pages/PricingPage/pricing.css";
import { RootState } from "../../app/store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../app/hooks/useAxiosPublic";


// Define types for the package data
interface Package {
  packageName: string;
  price: number;
  shortMessage: string;
  description: string;
  features:string[];

}

interface UpdateMembershipRequest {
  role:string;
  subscriptionStatus:string;
  subscriptionPlan:string;
}

const Pricing: React.FC = () => {
  const [monthlyPackages, setMonthlyPackages] = useState<Package[]>([]);
  const [yearlyPackages, setYearlyPackages] = useState<Package[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic()

  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);

  // Fetch Monthly Packages
  useEffect(() => {
    fetch("/monthlyPack.json")
      .then((response) => response.json())
      .then((data) => setMonthlyPackages(data.packages))
      .catch((error) =>
        console.error("Error fetching monthly packages:", error)
      );
  }, []);

  // Fetch Yearly Packages
  useEffect(() => {
    fetch("/yearlyPack.json")
      .then((response) => response.json())
      .then((data) => setYearlyPackages(data.packages))
      .catch((error) =>
        console.error("Error fetching yearly packages:", error)
      );
  }, []);

  const handleSubscriptionClick = async (pkg: Package) => {
    if (!user) {
      // If user is not logged in, navigate to the login page
      navigate("/register");
    } else {
      try {
        const requestBody: UpdateMembershipRequest = {
          role:"member",
          subscriptionStatus:"active",
          subscriptionPlan:pkg.packageName
        };
  
        const response = await axiosPublic.patch("/pricing/user/membership",{
         requestBody
        })
        console.log(response)
        navigate("/dashboard");
        console.log(pkg);
      } catch (error) {
        console.error("An error occurred while updating the user:", error);
      }
      console.log("User is logged in. Proceeding with subscription...");
    }
  };

  // Function to render package cards
  const renderPackageCard = (pkg: Package) => {
    return (
      <div className="card flex flex-col justify-between bg-base-100 shadow-xl p-5 h-full" key={pkg.packageName}>
        <div className="flex-grow">
          <section>
            <h2 className="text-center text-[24px] uppercase tracking-widest font-bold mb-4">
              {pkg.packageName}
            </h2>
            <p className="text-5xl mb-5">
              <span className="text-2xl">$</span>
              {pkg.price}
            </p>
            <p className="pb-5 text-gray-500">{pkg.shortMessage}</p>
            <hr className="my-4" />
            <p className="py-3">{pkg.description}</p>
          </section>
          <div className="justify-center mt-5">
          <button
            onClick={() => handleSubscriptionClick(pkg)}
            className="btn bg-secondary text-white hover:bg-primary border-none w-full"
          >
            Start your 14-days free trial
          </button>
        </div>
          <div className="mt-6">
            {pkg.features.map((feature, index) => (
              <p
                key={index}
                className="text-start flex items-center gap-x-3 inter text-black text-[16px] mb-3"
              >
                <IoCheckmarkDoneCircleOutline /> {feature}
              </p>
            ))}
          </div>
        </div>
        
      </div>
    );
  };
  // Function to toggle FAQ
  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial on all our plans. You can cancel anytime during the trial period.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time to fit your business needs.",
    },
    {
      question: "Are there any setup fees?",
      answer:
        "No, there are no hidden fees or setup charges. You only pay for the plan you choose.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time without any penalties or extra fees.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer:
        "Yes, we offer significant discounts when you choose to pay annually instead of monthly.",
    },
  ];

  return (
    <div className="container mx-auto px-5">
      {/* Hero Section */}
      <section className="bg-backgroundImg">
        <p className="text-center inter font-bold py-10 text-4xl md:text-6xl lg:text-6xl">
          <span className="text-primary">Choose the plan</span> that fits <br />
          your business needs!
        </p>
        <hr className="border-primary pb-5 w-[65%] mx-auto" />
        <div className="pb-10 flex flex-wrap gap-5 items-center justify-center">
          <p className="flex items-center gap-x-3 inter text-[16px]">
            <IoCheckmarkDoneCircleOutline /> No credit card required
          </p>
          <p className="flex items-center gap-x-3 inter text-[16px]">
            <IoCheckmarkDoneCircleOutline /> No hidden charges
          </p>
          <p className="flex items-center gap-x-3 inter text-[16px]">
            <IoCheckmarkDoneCircleOutline /> Straightforward pricing
          </p>
          <p className="flex items-center gap-x-3 inter text-[16px]">
            <IoCheckmarkDoneCircleOutline /> Cancel anytime
          </p>
        </div>
      </section>

      {/* React Tabs */}
      <Tabs className="text-center mt-[-20px] z-10 bg-transparent inter py-10">
        <TabList className="bg-white w-fit mx-auto rounded-full mb-5">
          <Tab>Monthly</Tab>
          <Tab>Yearly</Tab>
        </TabList>

        {/* Monthly Packages Tab */}
        <TabPanel>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center container mx-auto py-10">
            {monthlyPackages.map((pkg) => renderPackageCard(pkg))}
          </section>
        </TabPanel>
        {/* Yearly Packages Tab */}
        <TabPanel>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center container mx-auto py-10">
            {yearlyPackages.map((pkg) => renderPackageCard(pkg))}
          </section>
        </TabPanel>
      </Tabs>

      {/* Add-on Repository Section */}
      <section className="container mx-auto mb-20 space-y-10">
        <h1 className="text-center mt-12 text-4xl">Our Add-on Repository</h1>
        <p className="text-center">(Billed annually)</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          <div>
            <div className="card bg-base-100 shadow-xl">
              <h1 className="text-center text-xl font-normal uppercase py-3">
                Users
              </h1>
              <hr className="pb-2" />
              <div>
                <p className="text-center text-4xl pt-4">$7.5</p>
                <p className="text-center pb-12">user/month</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-base-100 shadow-xl">
              <h1 className="text-center text-xl font-normal uppercase py-3">
                Timesheet user
              </h1>
              <hr className="pb-2" />
              <div>
                <p className="text-center text-4xl pt-4">$2.5</p>
                <p className="text-center pb-12">user/month</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card bg-base-100 shadow-xl">
              <h1 className="text-center text-xl font-normal uppercase py-3">
                Client
              </h1>
              <hr className="pb-2" />
              <div>
                <p className="text-center text-4xl pt-4">$0.00</p>
                <p className="text-center pb-12">user/month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="faq-section bg-gray-100 py-10 px-5 md:px-20 container mx-auto rounded-xl">
        <h2 className="text-center text-4xl font-bold mb-10">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question bg-white p-5 rounded-lg shadow-md cursor-pointer flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                <p className="text-lg font-semibold">{item.question}</p>
                {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {activeIndex === index && (
                <div className="faq-answer bg-white p-5 mt-2 rounded-lg shadow-inner">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
