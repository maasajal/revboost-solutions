import { RootState } from "../../app/store/store";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import { useEffect } from "react";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import User from "../../app/features/users/UserType";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import { useForm, SubmitHandler } from "react-hook-form";
import { updateUser } from "../../app/api/usersAPI";
import Swal from "sweetalert2";
import revTheme from "../../components/utils/theme";
import { Helmet } from "react-helmet";
import { fetchPayments } from "../../app/features/payments/paymentsSlice";
import SectionTitle from "../../components/SectionTitle";
import RevButton from "../../components/RevButton";

interface UpdateUserData {
  photo: string;
  mobile: string;
}
const Profile: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(
    (state: RootState) => state.currentUser.user
  ) as User;
  const { loading, error } = useAppSelector(
    (state: RootState) => state.currentUser
  );

  const {
    name,
    email,
    photo,
    mobile,
    role,
    subscriptionPlan,
    subscriptionStatus,
    features,
  } = user;

  useEffect(() => {
    dispatch(getCurrentUser()); // Fetch all users
    if (user?._id) {
      dispatch(fetchPayments(user._id));
    }
  }, [dispatch, user]);

  const { paymentEntries } = useAppSelector(
    (state: RootState) => state.payments
  );

  const { register, handleSubmit } = useForm<User>({
    defaultValues: {
      name,
      email,
      photo,
      mobile,
      role,
      subscriptionPlan,
      subscriptionStatus,
      features,
    },
  });
  // Form submission handler
  const onSubmit: SubmitHandler<User> = async (data) => {
    // Handle the form submission logic, e.g., updating the profile
    const updateUserData: UpdateUserData = {
      photo: data.photo,
      mobile: data.mobile,
    };
    await dispatch(updateUser(email, updateUserData));
    Swal.fire({
      position: "top-end",
      title: `Update ${name} successfully!`,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handlePayment = async () => {
    try {
      console.log("Payment waiting!");
    } catch (error) {
      console.error("Payment initiation error: ", error);
    }
  };

  return (
    <section className="container mx-auto px-5 space-y-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${name} - RevBoost Solutions`}</title>
      </Helmet>
      <h1 className="text-center">User Profile</h1>
      <div>
        {!user
          ? loading && (
              <Box className="mx-auto py-10" sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            )
          : error && (
              <Typography
                className="mx-auto py-10"
                variant="body1"
                color="textSecondary"
              >
                {error}
              </Typography>
            )}
      </div>
      <div className="flex flex-col items-center space-y-4">
        <Avatar
          src={photo}
          alt="Profile Picture"
          sx={{ width: 120, height: 120 }}
          className={`${revTheme?.palette?.mode === "light" && "bg-white"}`}
        />
        <Typography variant="h5" className="font-semibold">
          {name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {email}
        </Typography>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-xl rounded-xl space-y-5 py-10 px-5"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">
          Update Profile
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextField
            label="Company Name"
            defaultValue={name}
            {...register("name")}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />

          <TextField
            label="Company Email"
            defaultValue={email}
            {...register("email")}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />

          <TextField
            label="Photo URL"
            defaultValue={photo}
            {...register("photo")}
            fullWidth
          />

          <TextField
            label="Mobile"
            defaultValue={mobile}
            {...register("mobile")}
            fullWidth
          />

          <TextField
            label="Role"
            defaultValue={role}
            {...register("role")}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />

          <TextField
            label="Subscription Plan"
            defaultValue={subscriptionPlan}
            {...register("subscriptionPlan")}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />

          <TextField
            label="Subscription Status"
            defaultValue={subscriptionStatus}
            {...register("subscriptionStatus")}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
          />
          <div className="p-4 rounded-lg border border-gray-200 space-y-3">
            <strong className="mb-2">
              Features on the plan {subscriptionPlan}
            </strong>
            <ul className="space-y-2">
              {features && features.length > 0 ? (
                features.map((feature: string, index: number) => (
                  <li key={index}>
                    {index + 1}. {feature}
                  </li>
                ))
              ) : (
                <li>No features available</li>
              )}
            </ul>
          </div>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-6 w-full"
        >
          Save Changes
        </Button>
      </form>

      <SectionTitle
        title="All your payment here"
        intro="Payments"
        content="Check out due date & pay on-time!"
      />
      <TableContainer
        component={Paper}
        className="overflow-x-auto min-w-full max-w-32 px-5"
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Transaction ID</strong>
              </TableCell>
              <TableCell>
                <strong>Due Date</strong>
              </TableCell>
              <TableCell>
                <strong>Pay Date</strong>
              </TableCell>
              <TableCell>
                <strong>Payment Status</strong>
              </TableCell>
              <TableCell>
                <strong>Amount</strong>
              </TableCell>
              <TableCell>
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentEntries && paymentEntries.length > 0 ? (
              paymentEntries.map((pay) => (
                <TableRow
                  key={pay.transactionId}
                  className="hover:bg-slate-600"
                >
                  <TableCell>{pay.transactionId}</TableCell>
                  <TableCell>
                    {pay?.due_date &&
                      new Date(pay.due_date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {pay?.paymentDate &&
                      new Date(pay.paymentDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{pay.payment_status}</TableCell>
                  <TableCell>$ {pay.amount}</TableCell>
                  <TableCell>
                    {pay.payment_status === "pending" ? (
                      <Button onClick={handlePayment}>
                        <RevButton name="Pay Now" />
                      </Button>
                    ) : (
                      <Box>
                        <Button disabled>
                          <RevButton name="Done" />
                        </Button>
                      </Box>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No Payments found!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default Profile;
