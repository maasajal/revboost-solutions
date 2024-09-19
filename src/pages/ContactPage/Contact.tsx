import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <section className="text-center border mt-3 mb-10">
        <img
          className="h-[400px] w-full"
          src="https://i.postimg.cc/VNm4yd6L/image-13.png"
          alt="contact us"
        />
      </section>
      <h1 className="font-extrabold text-[28px] inter text-center mb-10">
        Our contact info
      </h1>
      <section className="grid grid-cols-1 gap-10 md:flex md:justify-evenly lg:flex lg:justify-evenly inter">
        <div className="flex justify-evenly gap-[30px]">
          <div className="pt-2">
            <CiMail className="mb-2" />
            <IoIosCall className="mb-2" />
            <FaFacebookF className="mb-2" />
            <FaInstagram className="mb-2" />
            <CiLinkedin />
          </div>
          <div>
            <p className="font-medium">revboost@solution.com</p>
            <p className="font-medium">000000000</p>
            <p className="font-medium">facebook.com/reevboost</p>
            <p className="font-medium">instagram.com/reevboost</p>
            <p className="font-medium">linkedin.com/reevboost</p>
          </div>
        </div>
        <div>
          <section className="ml-[40px]">
            <iframe
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

        <form className="mt-10 mb-5">
          <div className="mx-auto grid grid-cols-1 lg:flex lg:justify-between w-[80%]">
            <div>
              <label>First Name</label> <br />
              <input className="border border-black w-full" type="text" />
            </div>
            <div>
              <label>Last Name</label> <br />
              <input className="border border-black w-full" type="text" />
            </div>
          </div>

          <section className="w-[80%] mx-auto">
            <label>Company Name</label> <br />
            <input className="border border-black w-full" type="text" /> <br />
            <label>Company Email</label> <br />
            <input className="border border-black w-full" type="text" />
            <label>Your message</label> <br />
            <input
              className="border border-black w-full h-[150px]"
              type="text"
            />
            <button className="border text-white bg-[#FF0000] h-[40px] w-[120px] mt-4 rounded-lg">
              Send
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Contact;
