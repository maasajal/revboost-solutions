import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import RevButton from "../../components/RevButton";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const TransitionsModal: React.FC<{ amount: number }> = ({ amount }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <RevButton name="Pay" onClick={handleOpen} className="animate-bounce" />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="rounded-xl border-none space-y-5">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Stripe Card Payment
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Input your card details to Pay for your subscription plan
            </Typography>
            <Elements stripe={stripePromise}>
              <CheckoutForm amount={amount} />
            </Elements>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default TransitionsModal;
