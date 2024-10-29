import RevenueForecastChart from "./RevenueForecastChart";
import RevenueComparisonPieChart from "./RevenueComparisonPieChart";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { useEffect } from "react";
import {
  fetchHalfYearlyRevenue,
  fetchMonthlyRevenue,
  fetchQuarterlyRevenue,
  fetchYearlyRevenue,
} from "../../app/api/revenueGrowthAPI";
import User from "../../app/features/users/UserType";
import { fetchRevenueData } from "../../app/features/revenueGrowth/revenueSlice";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import { RootState } from "../../app/store/store";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import RevenueCard from "./RevenueCard";
import { Helmet } from "react-helmet";
import SectionTitle from "../../components/SectionTitle";

const RevenueGrowth: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.currentUser.user) as User;

  useEffect(() => {
    dispatch(getCurrentUser());
    if (currentUser._id) {
      dispatch(fetchRevenueData(currentUser._id));
      dispatch(fetchMonthlyRevenue(currentUser._id));
      dispatch(fetchQuarterlyRevenue(currentUser._id));
      dispatch(fetchHalfYearlyRevenue(currentUser._id));
      dispatch(fetchYearlyRevenue(currentUser._id));
    }
  }, [dispatch, currentUser._id]);

  const { loading } = useAppSelector(
    (state: RootState) => state.monthlyRevenue
  );

  const { previousMonthRevenue, currentMonthRevenue, monthlyGrowth } =
    useAppSelector((state: RootState) => state.monthlyRevenue.monthlyRevenue);

  const {
    currentQuarter,
    previousQuarter,
    currentQuarterRevenue,
    previousQuarterRevenue,
    quarterlyGrowth,
  } = useAppSelector(
    (state: RootState) => state.quarterlyRevenue.quarterlyRevenue
  );

  const {
    currentHalfYear,
    previousHalfYear,
    currentHalfYearRevenue,
    previousHalfYearRevenue,
    halfYearlyGrowth,
  } = useAppSelector(
    (state: RootState) => state.halfYearlyRevenue.halfYearlyRevenue
  );

  const {
    currentYear,
    previousYear,
    currentYearRevenue,
    previousYearRevenue,
    yearlyGrowth,
  } = useAppSelector((state: RootState) => state.yearlyRevenue.yearlyRevenue);

  return (
    <div className="container mx-auto p-5 space-y-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Revenue Growth - RevBoost Solutions</title>
      </Helmet>
      <SectionTitle
        title="Total Revenue & Growth Percentage"
        intro={currentUser ? currentUser.name : "Company Name"}
        content="Find-out Revenue with yearly and monthly basis!"
      />
      {loading && (
        <Box display="flex" justifyContent="center" marginY={2}>
          <CircularProgress />
        </Box>
      )}

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8 py-10">
        <Grid item xs={2} sm={4} md={4}>
          <RevenueCard
            title={"Monthly Revenue"}
            current_time={""}
            previous_time={""}
            current={currentMonthRevenue}
            previous={previousMonthRevenue}
            growth={monthlyGrowth}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <RevenueCard
            title={"Quarterly Revenue"}
            current_time={currentQuarter}
            previous_time={previousQuarter}
            current={currentQuarterRevenue}
            previous={previousQuarterRevenue}
            growth={quarterlyGrowth}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <RevenueCard
            title={"Half Year Revenue"}
            current_time={currentHalfYear}
            previous_time={previousHalfYear}
            current={currentHalfYearRevenue}
            previous={previousHalfYearRevenue}
            growth={halfYearlyGrowth}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <RevenueCard
            title={"Yearly Revenue"}
            current_time={currentYear}
            previous_time={previousYear}
            current={currentYearRevenue}
            previous={previousYearRevenue}
            growth={yearlyGrowth}
          />
        </Grid>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8 py-10">
        <Typography variant="body2" className={`p-4 rounded-md shadow-xl`}>
          <p className="text-lg">Last 6 Months Revenue:</p>
          <h2 className="text-3xl font-bold"> $ {currentHalfYearRevenue}</h2>
        </Typography>
        <Typography variant="body2" className={`p-4 rounded-md shadow-xl`}>
          <p className="text-lg">Last 12 Months Revenue:</p>
          <h2 className="text-3xl font-bold">$ {currentYearRevenue}</h2>
        </Typography>

        <Typography variant="body2" className={`p-4 rounded-md shadow-xl`}>
          <p className="text-lg">Last 24 Months Revenue:</p>
          <h2 className="text-3xl font-bold">
            $ {currentYearRevenue + previousYearRevenue}
          </h2>
        </Typography>
      </div>

      <SectionTitle
        title="Revenue Forecast & Total Comparison Growth %"
        intro={currentUser ? currentUser.name : "Company Name"}
        content="Visualized the forecast & Income vs Expenses vs Revenue Growth!"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="h-full py-10 px-5 rounded-xl border">
          <RevenueForecastChart />
        </div>
        <div className="h-full py-10 px-5 rounded-xl border">
          <RevenueComparisonPieChart />
        </div>
      </div>
    </div>
  );
};

export default RevenueGrowth;
