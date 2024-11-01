import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="footer bg-footerBGColor text-neutral-content py-10 px-10 sm:px-20 md:px-32 mt-5"
      data-aos="fade-up"
    >
      <nav>
        <h6 className="font-bold mb-2 text-xl">Services</h6>
        <Link to="/pricing" className="link link-hover">
          Pricing
        </Link>
        <Link to="/dashboard/revenue-growth" className="link link-hover">
          Revenue
        </Link>
        <Link to="/dashboard/invoice-&-billing" className="link link-hover">
          Invoice
        </Link>
        <Link to="/dashboard/payroll" className="link link-hover">
          Payroll management
        </Link>
      </nav>
      <nav>
        <h6 className="font-bold mb-2 text-xl">Resources</h6>
        <Link to="/#faqs" className="link link-hover">
          FAQs
        </Link>
        <Link to="/pricing/#pricing_faqs" className="link link-hover">
          Pricing FAQs
        </Link>
      </nav>
      <nav>
        <h6 className="font-bold mb-2 text-xl">Social Links</h6>
        <div className="flex gap-3 text-xl">
          <a target="_blank" href="https://facebook.com/">
            <FaFacebookF />
          </a>
          <a target="_blank" href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a target="_blank" href="https://www.linkedin.com/">
            <FaLinkedinIn />
          </a>
        </div>
      </nav>
      <nav>
        <h6 className="font-bold mb-2 text-xl">Contact Us</h6>
        <a className="link link-hover" href="tel:+1234567890">
          Phone : +88 017 xxx xxx
        </a>
        <a className="link link-hover" href="mailto:revbostsolutions@gmail.com">
          Email: revboost@solution.com
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
