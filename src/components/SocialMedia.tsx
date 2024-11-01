import { CiLinkedin, CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { SlSocialFacebook } from "react-icons/sl";
const SocialMedia = () => {
  return (
    <div className="space-y-3 px-6" data-aos="zoom-in-right">
      <h2>Contact Us</h2>
      <p className=" text-sm font-montserrat">
        <span className="font-bold">Consultation:</span> Once you fill out the "Contact Us" form, we will schedule a meeting to discuss your specific needs and gather more details about your inquiry.
      </p>
      <p className="text-sm  font-montserrat">
        <span className="font-bold">Execution:</span>
        Upon your approval of the proposal, our team will begin executing the plan, providing regular updates and support throughout the process to ensure your satisfaction.
      </p>
      <div className="">
        <div>
          <p className="social-media">
            <CiMail className=" text-xl" />
            <a target="_blank" href="mailto:revbostsolutions@gmail.com">
              revboost@solutions.com
            </a>
          </p>
          <p className="social-media">
            <MdOutlinePhoneInTalk className="text-2xl" />
            <a href="tel:+1234567890">+88 017 xxx xxx</a>
          </p>
          <p className="social-media">
            <SlSocialFacebook className="text-2xl" />
            <a target="_blank" href="https://facebook.com/">
              Facebook
            </a>
          </p>
          <p className="social-media">
            <FaInstagram className=" text-2xl" />
            <a target="_blank" href="https://www.instagram.com/">
              Instagram
            </a>
          </p>
          <p className="social-media">
            <CiLinkedin className="text-2xl" />
            <a target="_blank" href="https://www.linkedin.com/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;