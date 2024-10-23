import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51PME65P8I4EJJA6IVRCniNipFpTaVBfuX5zNkOGk14QGk2S2nVaTja2we8Hpsn8TUZ1qdYxmWyjQSseUVdDOjCjP00VsoDROEP');

const PaymentButton: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [clientSecret, setClientSecret] = useState('');

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    // Fetch the client secret from the backend
    const response = await fetch('http://localhost:3000/api/v1/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, amount }),
    });

    if (!response.ok) {
      console.error('Failed to create payment intent:', response.statusText);
      return;
    }

    const data = await response.json();
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: { email },
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else if (result.paymentIntent?.status === 'succeeded') {
      console.log('Payment successful');

      // Save payment details to the backend
      const saveResponse = await fetch('http://localhost:3000/api/v1/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, amount }),
      });

      if (!saveResponse.ok) {
        console.error('Failed to save payment details:', saveResponse.statusText);
        return;
      }

      alert('Payment successful!');
    }
  };

  return (
    <div>
      <form onSubmit={handlePayment}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
        <button type="submit">Pay Now</button>
      </form>

      {clientSecret && (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe || !elements}>
            Confirm Payment
          </button>
        </form>
      )}
    </div>
  );
};

const StripeButton: React.FC = () => (
  <Elements stripe={stripePromise}>
    <PaymentButton />
  </Elements>
);

export default StripeButton;
