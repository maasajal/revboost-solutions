import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/SectionTitle";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../../src/pages/PricingPage/pricing.css";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import { updateUser } from "../../app/api/usersAPI";
import User from "../../app/features/users/UserType";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { RootState } from "../../app/store/store";
import DoneIcon from "@mui/icons-material/Done";
// Define types for the package data
interface Package {
  packageName: string;
  price: number;
  shortMessage: string;
  description: string;
  features: string[];
  planFeature: string[];
}
interface UpdateMembershipRequest {
  role: string;
  subscriptionStatus: string;
  subscriptionPlan: string;
  features: string[];
}

const Pricing: React.FC = () => {
  const [monthlyPackages, setMonthlyPackages] = useState<Package[]>([]);
  const [yearlyPackages, setYearlyPackages] = useState<Package[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(
    (state: RootState) => state.currentUser?.user
  ) as User | null;

  useEffect(() => {
    dispatch(getCurrentUser());
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

  // main handlerSubscriptionClick
  const handleSubscriptionClick = async (pkg: Package) => {
    if (!user) {
      // If user is not logged in or email is undefined, navigate to the login page
      navigate("/login");
    } else {
      try {
        const requestBody: UpdateMembershipRequest = {
          role: "member",
          subscriptionStatus: "request",
          subscriptionPlan: pkg.packageName,
          features: pkg?.planFeature,
        };
        await dispatch(updateUser(user?.email, requestBody));

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
      <Card data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          boxShadow: 3,
          background: "white",
          borderRadius: 5,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ textTransform: "uppercase", letterSpacing: 2 }}
          className={`${user?.subscriptionStatus === "active" && user.subscriptionPlan === pkg.packageName ? "bg-lightColor p-2 text-white py-5" : "bg-slate-300 py-5"}`}
        >
          {user?.subscriptionPlan === pkg.packageName && <DoneIcon />}{" "}
          {pkg.packageName}
        </Typography>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Box component="section">
            {/* <Typography
              variant="h5"
              component="h2"
              align="center"
              fontWeight="bold"
              gutterBottom
              sx={{ textTransform: "uppercase", letterSpacing: 2 }}
              className={`${user?.subscriptionStatus === "active" && user.subscriptionPlan === pkg.packageName ? "bg-lightColor p-2 text-white rounded-full" : ""}`}
            >
              {user?.subscriptionPlan === pkg.packageName && <DoneIcon />}{" "}
              {pkg.packageName}
            </Typography> */}
            <Typography variant="h3" gutterBottom>
              <Typography component="span" variant="h6">
                $
              </Typography>
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
            <Tooltip
              title={
                user?.subscriptionPlan === pkg.packageName
                  ? "This package is active"
                  : "If you want to change the package, please contact us"
              }
              placement="bottom"
            >
              <Button
                disabled={user?.role === "admin"}
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => handleSubscriptionClick(pkg)}
                sx={{
                  backgroundColor: "#1E2E61",
                  py: 1.5,
                  "&:hover": { backgroundColor: "#2E568A" },
                }}
              >
                {user?.subscriptionPlan === pkg.packageName
                  ? "Active Package"
                  : "Start your 14-days free trial"}
              </Button>
            </Tooltip>
          </Box>
          <Grid container spacing={1} sx={{ mt: 4 }}>
            {pkg.features.map((feature, index) => (
              <Grid
                item
                xs={12}
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pricing Plan - RevBoost Solutions</title>
        <meta
          name="description"
          content="Explore flexible pricing plans at RevBoost Solutions designed to meet your business needs. Get access to powerful tools for revenue growth, expense management, VAT & tax calculation, and more—choose the plan that suits your company best."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-backgroundImg" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
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
            {monthlyPackages.map((pkg) => (
              <div key={pkg.price}>{renderPackageCard(pkg)}</div>
            ))}
          </section>
        </TabPanel>
        {/* Yearly Packages Tab */}
        <TabPanel>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center container mx-auto py-10">
            {yearlyPackages.map((pkg) => (
              <div key={pkg.price}>{renderPackageCard(pkg)}</div>
            ))}
          </section>
        </TabPanel>
      </Tabs>

      {/* Add-on Repository Section */}
      <Box sx={{ mb: 5 }}>
        {/* <Typography variant="h4" align="center" mt={3}>
          Our Add-on Repository
        </Typography>
        <Typography variant="body1" align="center">
          (Billed annually)
        </Typography> */}
        <SectionTitle title="Our Add-on Repository" content="Billed annually" />

        <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
          {/* Users Card */}
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 3 }} data-aos="fade-zoom-in">
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ textTransform: "uppercase", py: 2 }}
                >
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
            <Card sx={{ boxShadow: 3 }} data-aos="fade-zoom-in"
     data-aos-easing="linear"
     data-aos-duration="1500">
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ textTransform: "uppercase", py: 2 }}
                >
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
            <Card sx={{ boxShadow: 3 }} data-aos="fade-zoom-in">
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ textTransform: "uppercase", py: 2 }}
                >
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
      <div
        id="pricing_faqs"
        className="faq-section bg-gray-100 py-10 px-5 md:px-20 container mx-auto rounded-xl"
      >
        <SectionTitle
          title="Frequently Asked Questions"
          intro="FAQs"
          content="Our pricing related questions & answers"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
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
