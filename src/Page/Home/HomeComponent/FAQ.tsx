import { useEffect, useState } from "react";


const FAQ = () => {
  const initialData = {
    title: "updating",
    description: ["coming soon"]
  }
  const [faq, setFaq] = useState([initialData])
  useEffect(() => {
    try {
      fetch('/faq.json')
        .then(response => response.json())
        .then(json => setFaq(json))
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      // 
    }
  }, [])
  if (!faq.length) <p className="text-center">Loading</p>

  return (
    <section className="max-w-6xl mx-auto">

      <div className="join join-vertical w-full ">
        {faq?.map((item, index) => <div key={index} className="collapse collapse-arrow join-item border-base-100 border">
          <input type="radio" name="my-accordion-4" defaultChecked={index === 0} />
          <div className="collapse-title text-xl font-medium"> <h5>{item.title}</h5></div>
          <div className="collapse-content">
            {item.description.map((e, i) => <p className="mb-3" key={i}>{e}</p>)}
          </div>
        </div>)}

      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;