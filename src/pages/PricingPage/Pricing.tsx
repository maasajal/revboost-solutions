import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../../../src/pages/PricingPage/pricing.css";
import { RootState } from "../../app/store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 

// Define types for the package data
interface Package {
  packageName: string;
  price: number;
  shortMessage: string;
  description: string;
}

const Pricing: React.FC = () => {
  const [monthlyPackages, setMonthlyPackages] = useState<Package[]>([]);
  const [yearlyPackages, setYearlyPackages] = useState<Package[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate(); 

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

  // Function to handle subscription button click
  const handleSubscriptionClick = () => {
    if (!user) {
      // If user is not logged in, navigate to the login page
      navigate("/login");
    } else {
      // Handle subscription logic if the user is logged in
      console.log("User is logged in. Proceeding with subscription...");
    }
  };

  // Function to render package cards
  const renderPackageCard = (pkg: Package) => {
    return (
      <div className="card bg-base-100 shadow-xl" key={pkg.packageName}>
        <div className="card-body">
          <section>
            <h2 className="text-center text-[24px] uppercase tracking-widest">
              {pkg.packageName}
            </h2>
            <hr />
            <p className="text-5xl pt-10">
              <span className="text-2xl">$</span>
              {pkg.price}
            </p>
            <p className="pb-7">{pkg.shortMessage}</p>
            <hr />
          </section>
          <p className="pt-3">{pkg.description}</p>
          <div className="card-actions justify-center">
            <button
              className="btn bg-secondary text-white hover:bg-primary border-none"
              onClick={handleSubscriptionClick} 
            >
              Start your 14-days free trial
            </button>
          </div>
          <hr className="mt-5" />
          <div className="text-start">
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Create quotes and invoices
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Adapt to local languages & tax
              laws
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Collaborate with up to 3 users
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Record multi-currency
              transactions
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Manage online payments
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Set up automated payment
              reminders
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Handle projects & timesheets
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Offer a dedicated self-service
              customer portal
            </p>
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
    <div>
      {/* Hero Section */}
      <section className="bg-backgroundImg">
        <p className="text-center inter font-bold py-10 text-4xl md:text-6xl lg:text-6xl">
          <span className="text-primary">Choose the plan</span> that fits <br />
          your business needs!
        </p>
        <hr className="text-primary pb-5 w-[65%] mx-auto" />
        <div className="w-[65%] mx-auto pb-10 grid grid-cols-1 pl-5 md:flex md:justify-around lg:flex lg:justify-around">
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
      <Tabs className="text-center mt-[-20px] z-10 bg-transparent inter">
        <TabList className="bg-white w-fit mx-auto rounded-full mb-5">
          <Tab>Monthly</Tab>
          <Tab>Yearly</Tab>
        </TabList>

        {/* Monthly Packages Tab */}
        <TabPanel>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center pt-10 pl-[10px] container mx-auto">
            {monthlyPackages.map((pkg) => renderPackageCard(pkg))}
          </section>
        </TabPanel>
        {/* Yearly Packages Tab */}
        <TabPanel>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center pt-[10px] container mx-auto">
            {yearlyPackages.map((pkg) => renderPackageCard(pkg))}
          </section>
        </TabPanel>
      </Tabs>

      {/* Add-on Repository Section */}
      <section className="container mx-auto mb-20">
        <h1 className="text-center mt-12 text-4xl">Our Add-on Repository</h1>
        <p className="text-center">(Billed annually)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center pt-10">
          {/* Add content for add-on repository */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section mb-20">
        <h2 className="text-center text-4xl mb-8">Frequently Asked Questions</h2>
        <div className="container mx-auto">
          {questions.map((q, index) => (
            <div
              key={index}
              className="bg-white shadow-lg mb-4 p-5 rounded-lg"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-xl">{q.question}</h3>
                {activeIndex === index ? (
                  <IoIosArrowUp size={24} />
                ) : (
                  <IoIosArrowDown size={24} />
                )}
              </div>
              {activeIndex === index && <p className="mt-4">{q.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
