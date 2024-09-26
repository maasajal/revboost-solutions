import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-footerBGColor text-neutral-content py-10 px-10 sm:px-20 md:px-32 mt-20">
      <nav>
        <h6 className="font-bold mb-2 text-xl">Services</h6>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Report</a>
        <a className="link link-hover">Invoice</a>
        <a className="link link-hover">Client management</a>
      </nav>
      <nav>
        <h6 className="font-bold mb-2 text-xl">Resources</h6>
        <a className="link link-hover">FAQS</a>
        <a className="link link-hover">Blogs</a>
        <a className="link link-hover">Forums</a>
      </nav>
      <nav>
        <h6 className="font-bold mb-2 text-xl">Social Links</h6>
        <div className="flex gap-3 text-xl">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </nav>
      <nav>
        <h6 className="font-bold mb-2 text-xl">Contact Us</h6>
        <a className="link link-hover">Phone : 00000000000</a>
        <a className="link link-hover">Email: revboost@solution.com</a>
      </nav>
    </footer>
  );
};

export default Footer;
