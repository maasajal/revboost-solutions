import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { axiosSecure } from "../../app/hooks/useAxiosSecure";
import RevButton from "../../components/RevButton";
import { Typography } from "@mui/material";
import Swal from "sweetalert2";

const CheckoutForm: React.FC<{ amount: number }> = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axiosSecure
      .post("/payments/create-payment-intent", { amount })
      .then((response) => {
        setClientSecret(response.data.clientSecret);
      });
  }, [amount]);

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
        // Payment data update method will be implement here...

        Swal.fire({
          position: "top-end",
          title: "Payment successful!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <Typography variant="h6" component="h2">
        Amount: $ {amount}
      </Typography>
      <CardElement />
      <RevButton
        type="submit"
        name="Pay Now"
        disabled={!stripe || !clientSecret}
      />
    </form>
  );
};

export default CheckoutForm;
