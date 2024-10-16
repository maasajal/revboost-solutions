import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { useRef, FormEvent } from "react";
import Swal from "sweetalert2";

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

  return (
    <div>
      <section className="text-center border mt-3 mb-10">
        <img
          className="h-[180px] w-full lg:h-[400px]"
          src="https://i.postimg.cc/VNm4yd6L/image-13.png"
          alt="contact us"
        />
      </section>
      <div className="container mx-auto">
        <h1 className="font-extrabold text-[28px] inter text-center mb-10">
          Our contact info
        </h1>
        <section className="grid grid-cols-1 md:grid md:grid-cols-1 gap-10 lg:flex lg:justify-evenly inter items-center mx-5 lg:mx-10">
          <div className="flex justify-evenly gap-[30px] text-2xl">
            <div className="pt-2">
              <CiMail className="mb-[13px] text-2xl" />
              <IoIosCall className="mb-[15px] text-2xl" />
              <FaFacebookF className="mb-[15px] text-2xl" />
              <FaInstagram className="mb-[15px] text-2xl" />
              <CiLinkedin className="mb-[15px] text-2xl" />
            </div>
            <div>
              <p className="font-medium text-xl mb-3">
                <a target="_blank" href="mailto:revbostsolution@gmail.com">
                  revboost@solution.com
                </a>
              </p>
              <p className="font-medium text-xl mb-3">
                <a href="tel:+1234567890">+880123456789</a>
              </p>
              <p className="font-medium text-xl mb-3">
                <a target="_blank" href="https://medium.com/">
                  facebook.com/reebboost_solution
                </a>
              </p>
              <p className="font-medium text-xl mb-3 underline">
                <a href="www.instagram.com/reebboost_solution">
                  instagram.com/reebboost_solution
                </a>
              </p>
              <p className="font-medium text-xl underline">
                <a href="www.linkedin.com/reebboost_solution">
                  linkedin.com/reebboost_solution
                </a>
              </p>
            </div>
          </div>
          <div>
            <section className="ml-[40px] md:mx-[20%]">
              <iframe
                className="h-[400px] md:w-[450px] lg:w-[450px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29218.663153387362!2d90.3977075855197!3d23.735505571459257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2z4Kau4Kak4Ka_4Kad4Ka_4KayLCDgpqLgpr7gppXgpr4!5e0!3m2!1sbn!2sbd!4v1726687319634!5m2!1sbn!2sbd"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
          </div>
        </section>
        <div className="mt-10 inter font-medium text-[20px] text-[#000000]">
          <h1 className="inter font-extrabold text-3xl text-center">
            Let’s Start a Conversation
          </h1>

          <form ref={form} onSubmit={sendEmail} className="mt-10 mb-5">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 w-[80%] lg:gap-x-5">
              <div>
                <label>First Name</label> <br />
                <input
                  name="first_name"
                  className="border border-black w-full pl-2"
                  type="text"
                />
              </div>
              <div>
                <label>Last Name</label> <br />
                <input
                  name="last_name"
                  className="border border-black w-full pl-2"
                  type="text"
                />
              </div>
            </div>

            <section className="w-[80%] mx-auto">
              <label>Company Name</label> <br />
              <input
                name="company_name"
                className="border border-black w-full pl-2"
                type="text"
              />
              <br />
              <label>Company Email</label> <br />
              <input
                name="company_email"
                className="border border-black w-full pl-2"
                type="text"
              />
              <label>Your message</label> <br />
              <textarea
                name="message_box"
                className="border border-black w-full h-[150px] pl-2"
                typeof="text"
              />
              <button
                type="submit"
                className="border text-white bg-[#FF0000] h-[40px] w-[120px] mt-4 rounded-lg"
              >
                Send
              </button>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
