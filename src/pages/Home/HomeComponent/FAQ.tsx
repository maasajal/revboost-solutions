import { useEffect, useState } from "react";
import faqImage from "../../../assets/faq/FAQ.png";
import SectionTitle from "../../../components/SectionTitle";

interface FAQItem {
  title: string;
  description: string[];
}

const FAQ = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
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
    <section className="pb-24">
      <SectionTitle
        title="Frequently Asked Questions"
        intro="FAQs"
        content="A list of common questions and answers designed to provide quick and helpful information on a specific topic or service."
      />
      <div className="lg:flex gap-6 items-start mt-10">
        <div className="relative w-full  lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          {!isLoaded && <div className="skeleton h-32 w-32 absolute inset-0"></div>}
          <img
            src={faqImage}
            alt="FAQ"
            onLoad={() => setIsLoaded(true)}
            className={`transition-opacity  duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} rounded-lg w-full max-w-xl`}
          />
        </div>
        
        <div className="join join-vertical w-full border border-[#075985]  ">
          {faq.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-arrow join-item border-t border-[#075985] last:border-b"
            >
              <input
                type="radio"
                name="my-accordion-4"
                defaultChecked={index === 0}
              />
              <div className="collapse-title font-sans text-xl font-medium">
                <h5>{item.title}</h5>
              </div>
              <div className="collapse-content bg-base-200">
                {item.description.map((desc, i) => (
                  <p className="mb-1 pt-4" key={i}>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
