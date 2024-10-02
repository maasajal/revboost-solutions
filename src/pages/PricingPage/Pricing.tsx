import React, { useEffect, useState } from 'react';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Swal from 'sweetalert2'; 
import '../../../src/pages/PricingPage/pricing.css';

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

  useEffect(() => {
    fetch('/monthlyPack.json')
      .then((response) => response.json())
      .then((data) => setMonthlyPackages(data.packages))
      .catch((error) => console.error('Error fetching monthly packages:', error));
  }, []);

  useEffect(() => {
    fetch('/yearlyPack.json')
      .then((response) => response.json())
      .then((data) => setYearlyPackages(data.packages))
      .catch((error) => console.error('Error fetching yearly packages:', error));
  }, []);

  const renderPackageCard = (pkg: Package) => {
    return (
      <div className="card bg-base-100 w-96 shadow-xl" key={pkg.packageName}>
        <div className="card-body">
          <section>
            <h2 className="text-center text-[24px] uppercase tracking-widest">{pkg.packageName}</h2>
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
              className="btn btn-primary text-black bg-green-400 hover:text-white border-none"
              onClick={() => handleTrialStart(pkg.packageName)} // Add onClick handler
            >
              Start your 14-days free trial
            </button>
          </div>
          <hr className="mt-5" />
          <div className="text-start">
            {/* List of features */}
            {renderFeatures()}
          </div>
        </div>
      </div>
    );
  };

  // Function to handle the trial start
  const handleTrialStart = (packageName: string) => {
    Swal.fire({
      title: 'Success!',
      text: `You have started a 14-day free trial for the ${packageName} package.`,
      icon: 'success',
      confirmButtonText: 'Cool!',
    });
  };

  const renderFeatures = () => {
    const features = [
      "Create quotes and invoices",
      "Adapt to local languages & tax laws",
      "Collaborate with up to 3 users",
      "Record multi-currency transactions",
      "Manage online payments",
      "Set up automated payment reminders",
      "Handle projects & timesheets",
      "Offer a dedicated self-service customer portal",
    ];

    return features.map((feature, index) => (
      <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3" key={index}>
        <IoCheckmarkDoneCircleOutline /> {feature}
      </p>
    ));
  };

  // Function to toggle FAQ
  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial on all our plans. You can cancel anytime during the trial period.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time to fit your business needs.',
    },
    {
      question: 'Are there any setup fees?',
      answer: 'No, there are no hidden fees or setup charges. You only pay for the plan you choose.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time without any penalties or extra fees.',
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes, we offer significant discounts when you choose to pay annually instead of monthly.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      {/* Other sections remain unchanged */}

      {/* React Tabs */}
      <Tabs className="text-center mt-[-20px] z-10 bg-transparent inter">
        <TabList className="bg-white w-[200px] mx-auto rounded-full border">
          <Tab>Monthly</Tab>
          <Tab>Yearly</Tab>
        </TabList>

        <TabPanel>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center pt-10 pl-[10px]">
            {monthlyPackages.map((pkg) => renderPackageCard(pkg))}
          </section>
        </TabPanel>
        <TabPanel>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center pt-[10px]">
            {yearlyPackages.map((pkg) => renderPackageCard(pkg))}
          </section>
        </TabPanel>
      </Tabs>

      {/* Add-on Repository Section */}
      {/* FAQ Section remains unchanged */}
    </div>
  );
};

export default Pricing;
