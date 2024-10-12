import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../../../src/pages/PricingPage/pricing.css";
import { useNavigate } from "react-router-dom";
// import useAxiosPublic from "../../app/hooks/useAxiosPublic";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { updateUser } from "../../app/api/usersAPI";
import { jwtDecode } from "jwt-decode";
import { RootState } from "../../app/store/store";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography, Button, Divider, Box, Grid } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


// Define types for the package data
interface Package {
  packageName: string;
  price: number;
  shortMessage: string;
  description: string;
  features: string[];
}
interface UpdateMembershipRequest {
  role: string;
  subscriptionStatus: string;
  subscriptionPlan: string;
}

export interface DecodedToken {
  email: string;
}

const Pricing: React.FC = () => {
  const [monthlyPackages, setMonthlyPackages] = useState<Package[]>([]);
  const [yearlyPackages, setYearlyPackages] = useState<Package[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token); // Decode the token with the defined type
        setEmail(decoded.email);
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, [dispatch]);

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
      // If user is not logged in or email is undefined, navigate to the login page
      navigate("/login");
    } else {
      try {
        const requestBody: UpdateMembershipRequest = {
          role: "member",
          subscriptionStatus: "active",
          subscriptionPlan: pkg.packageName,
        };
        await dispatch(updateUser(email, requestBody));

        // Navigate to the dashboard after successful update
        navigate("/dashboard");
      } catch (error) {
        console.error("An error occurred while updating the user:", error);
      }
    }
  };

  // Function to render package cards
  const renderPackageCard = (pkg: Package) => {
    return (
      <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 3, height: '100%', boxShadow: 3, background: 'white' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box component="section">
          <Typography
            variant="h5"
            component="h2"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ textTransform: 'uppercase', letterSpacing: 2 }}
          >
            {pkg.packageName}
          </Typography>
          <Typography variant="h3" gutterBottom>
            <Typography component="span" variant="h6">$</Typography>
            {pkg.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {pkg.shortMessage}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" gutterBottom>
            {pkg.description}
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => handleSubscriptionClick(pkg)}
            sx={{ backgroundColor: '#f50057', '&:hover': { backgroundColor: '#d32f2f' } }}
          >
            Start your 14-days free trial
          </Button>
        </Box>
        <Grid container spacing={1} sx={{ mt: 4 }}>
          {pkg.features.map((feature, index) => (
            <Grid item xs={12} key={index} sx={{ display: 'flex', alignItems: 'center', textAlign: "left"}}>
              <CheckCircleOutlineIcon sx={{ mr: 1 }} />
              <Typography variant="body1">{feature}</Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
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
       <Box sx={{ mb: 5 }}>
      <Typography variant="h4" align="center" mt={3}>
        Our Add-on Repository
      </Typography>
      <Typography variant="body1" align="center">
        (Billed annually)
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
        {/* Users Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" align="center" sx={{ textTransform: 'uppercase', py: 2 }}>
                Users
              </Typography>
              <Divider />
              <Box sx={{ py: 3 }}>
                <Typography variant="h3" align="center" sx={{ pt: 2 }}>
                  $7.5
                </Typography>
                <Typography variant="body1" align="center" sx={{ pb: 3 }}>
                  user/month
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Timesheet User Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" align="center" sx={{ textTransform: 'uppercase', py: 2 }}>
                Timesheet User
              </Typography>
              <Divider />
              <Box sx={{ py: 3 }}>
                <Typography variant="h3" align="center" sx={{ pt: 2 }}>
                  $2.5
                </Typography>
                <Typography variant="body1" align="center" sx={{ pb: 3 }}>
                  user/month
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Client Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" align="center" sx={{ textTransform: 'uppercase', py: 2 }}>
                Client
              </Typography>
              <Divider />
              <Box sx={{ py: 3 }}>
                <Typography variant="h3" align="center" sx={{ pt: 2 }}>
                  $0.00
                </Typography>
                <Typography variant="body1" align="center" sx={{ pb: 3 }}>
                  user/month
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>

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
