import { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { axiosSecure } from "../../app/hooks/useAxiosSecure";
import RevButton from "../../components/RevButton";
import { Typography } from "@mui/material";
import Swal from "sweetalert2";
import { getCurrentUser } from "../../app/api/currentUserAPI";
import { fetchPayments } from "../../app/features/payments/paymentsSlice";
import { useAppDispatch } from "../../app/hooks/useAppDispatch";
import User from "../../app/features/users/UserType";
import { useAppSelector } from "../../app/hooks/useAppSelector";
import { RootState } from "../../app/store/store";

const CheckoutForm: React.FC<{ amount: number }> = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const dispatch = useAppDispatch();

  const user = useAppSelector(
    (state: RootState) => state.currentUser.user
  ) as User;
  const { _id: userId, email: userEmail } = user;

  useEffect(() => {
    axiosSecure
      .post("/payments/create-payment-intent", { amount })
      .then((response) => {
        setClientSecret(response.data.clientSecret);
      });
  }, [amount]);

  useEffect(() => {
    dispatch(getCurrentUser()); // Fetch all users
    if (userId) {
      dispatch(fetchPayments(userId));
    }
  }, [dispatch, userId]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: { card: cardElement },
        }
      );

      if (error) {
        console.error(error.message);
      } else if (paymentIntent) {
        const paymentEntry = {
          transactionId: paymentIntent.id,
          payment_status: paymentIntent.status,
          paymentDate: new Date().toISOString(),
          amount,
        };
        try {
          await axiosSecure.post("/payments/add-payment", {
            userId,
            userEmail,
            paymentEntries: [paymentEntry],
          });
          Swal.fire({
            position: "top-end",
            title: "Payment successful!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (apiError) {
          console.error("Error updating payment collection:", apiError);
          Swal.fire({
            position: "top-end",
            title: "Payment successful but could not save details",
            icon: "warning",
            showConfirmButton: true,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <Typography variant="h6" component="h2">
        Amount: $ {amount}
      </Typography>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <RevButton
        type="submit"
        name="Pay Now"
        disabled={!stripe || !clientSecret}
      />
    </form>
  );
};

export default CheckoutForm;
