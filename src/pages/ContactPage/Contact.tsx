import PageCover from "../../components/PageCover";

const Contact = () => {
  return (
    <div>
      <section className="contact_banner">
        <PageCover
          bgCoverImg="https://i.postimg.cc/VNm4yd6L/image-13.png"
          heading="Contact Us"
          title="Get in Touch"
          headingText="We would love to hear from you"
          content="Feel free to contact us for any inquiries or support. Our team will get back to you as soon as possible."
        />
      </section>
      <section className="contact_info"></section>
      <section className="contact_form"></section>
    </div>
  );
};

export default Contact;
