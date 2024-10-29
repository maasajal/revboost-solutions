import { useEffect, useState } from "react";
// import faqImage from "../../../assets/faq/FAQ.png";
import SectionTitle from "../../../components/SectionTitle";
import questionImg from "../../../assets/faq/pana.svg";

interface FAQItem {
  title: string;
  description: string[];
}

const FAQ = () => {
  // const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [faq, setFaq] = useState<FAQItem[]>([]);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await fetch("/faq.json");
        const json = await response.json();
        setFaq(json);
      } catch (e) {
        console.error("Failed to fetch FAQ data", e);
      }
    };

    fetchFaq();
  }, []);

  if (faq.length === 0) return <p className="text-center">Loading</p>;

  return (
    <section id="faqs" className="container mx-auto px-2 md:px-4 lg:px-6">
      <SectionTitle
        title="Frequently Asked Questions"
        intro="FAQs"
        content="A list of common questions and answers designed to provide quick and helpful information on a specific topic or service."
      />

      <div className="lg:flex bg-gray-300 rounded-xl">
        <div className="bg-gray-600 flex items-center px-6 rounded-l-xl">
          <img src={questionImg} alt="FAQs" />
        </div>

        {/* accordian */}
        <div className="join join-vertical w-full p-6">
          {faq.map((item, index) => (
            <div
              key={index}
              className={`collapse collapse-arrow join-item ${
                index !== faq.length - 1 ? "border-b" : ""
              }`}
            >
              <input
                type="radio"
                name="my-accordion-4"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-xl font-medium">
                {item.title}
              </div>
              <div className="collapse-content">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
