import React, { useEffect, useState } from 'react';
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../../../src/pages/PricingPage/pricing.css';

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

  // Fetch Monthly Packages
  useEffect(() => {
    fetch('/monthlyPack.json')
      .then((response) => response.json())
      .then((data) => setMonthlyPackages(data.packages))
      .catch((error) => console.error('Error fetching monthly packages:', error));
  }, []);

  // Fetch Yearly Packages
  useEffect(() => {
    fetch('/yearlyPack.json')
      .then((response) => response.json())
      .then((data) => setYearlyPackages(data.packages))
      .catch((error) => console.error('Error fetching yearly packages:', error));
  }, []);

  // Function to render package cards
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
            <button className="btn btn-primary text-black bg-green-400 hover:text-white border-none">
              Start your 14-days free trial
            </button>
          </div>
          <hr className="mt-5" />
          <div className="text-start">
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Create quotes and invoices
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Adapt to local languages & tax laws
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Collaborate with up to 3 users
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Record multi-currency transactions
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Manage online payments
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Set up automated payment reminders
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Handle projects & timesheets
            </p>
            <p className="flex items-center gap-x-3 inter text-black text-[16px] mb-3">
              <IoCheckmarkDoneCircleOutline /> Offer a dedicated self-service customer portal
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-950">
        <p className="text-center text-white inter font-bold py-10 text-4xl md:text-6xl lg:text-6xl">
          <span className="text-green-500">Choose the plan</span> that fits <br />
          your business needs!
        </p>
        <hr className="text-green-900 pb-5 w-[65%] mx-auto" />
        <div className="w-[65%] mx-auto pb-10 grid grid-cols-1 pl-5 md:flex md:justify-around lg:flex lg:justify-around">
          <p className="flex items-center gap-x-3 inter text-white text-[16px]">
            <IoCheckmarkDoneCircleOutline /> No credit card required
          </p>
          <p className="flex items-center gap-x-3 inter text-white text-[16px]">
            <IoCheckmarkDoneCircleOutline /> No hidden charges
          </p>
          <p className="flex items-center gap-x-3 inter text-white text-[16px]">
            <IoCheckmarkDoneCircleOutline /> Straightforward pricing
          </p>
          <p className="flex items-center gap-x-3 inter text-white text-[16px]">
            <IoCheckmarkDoneCircleOutline /> Cancel anytime
          </p>
        </div>
      </section>

      {/* React Tabs */}
      <Tabs className="text-center mt-[-20px] z-10 bg-transparent inter">
        <TabList className="bg-white w-[200px] mx-auto rounded-full border">
          <Tab>Monthly</Tab>
          <Tab>Yearly</Tab>
        </TabList>

        {/* Monthly Packages Tab */}
        <TabPanel>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center pt-10">
            {monthlyPackages.map((pkg) => renderPackageCard(pkg))}
          </section>
        </TabPanel>

        {/* Yearly Packages Tab */}
        <TabPanel>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center pt-10">
            {yearlyPackages.map((pkg) => renderPackageCard(pkg))}
          </section>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Pricing;
