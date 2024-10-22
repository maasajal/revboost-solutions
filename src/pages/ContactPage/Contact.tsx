import emailjs from "@emailjs/browser";
import { Box } from "@mui/material";
import { FormEvent, useRef } from "react";
import Swal from "sweetalert2";
import SocialMedia from "../../components/SocialMedia";
import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID!,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
          form.current!,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
        )
        .then(
          () => {
            console.log("SUCCESS!");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Thank's for your message",
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  console.log("Please use this function to send email", sendEmail)

  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          border: 1,
          mt: 3,
          mb: 10,
        }}
      >
        <Box
          component="img"
          sx={{
            height: { xs: 180, lg: 400 },
            width: "100%",
          }}
          src="https://i.postimg.cc/VNm4yd6L/image-13.png"
          alt="contact us"
        />
      </Box>
      <div className="container mx-auto">
        <div className="mt-10 inter font-medium text-[20px] text-[#000000]">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
            <SocialMedia />
            <ContactForm />
          </div>
        <ContactLocation />
        </div>
      </div>
    </div>
  );
};

export default Contact;
