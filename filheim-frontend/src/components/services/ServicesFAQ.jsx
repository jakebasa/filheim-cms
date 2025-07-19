import { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";


function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What makes Filheim different from other cabinetry brands?",
      answer: "Filheim combines the craftsmanship of Filipino artisans with premium, bespoke designs. Unlike mass-produced or imported brands, each piece is meticulously crafted to reflect personal style and local sophistication—luxury that’s authentically homegrown."
    },
    {
      question: "Can Filheim Cabinets be customized to fit unique spaces?",
      answer: "Absolutely. Every Filheim creation is tailored to your space, preferences, and lifestyle. From material finishes to functional details, our designs are as unique as the homes they grace."
    },
    {
      question: "How long does the production and installation process take?",
      answer: "Timelines vary based on design complexity, but we prioritize precision over speed. Clients receive a detailed schedule after consultation, ensuring transparency from sketch to installation."
    },
    {
      question: "Why choose locally made cabinetry over imported European brands?",
      answer: "Filheim proves that local craftsmanship can rival global luxury—offering the same premium quality with a deeply personal touch. By choosing Filheim, you support Filipino artisans while enjoying faster turnaround times and sustainable sourcing."
    },
    {
      question: "Do you offer sustainable material options?",
      answer: "Yes. Sustainability is woven into our ethos. We work with responsibly sourced wood, low-VOC finishes, and eco-conscious practices to deliver beauty that respects both home and environment."
    },
  ];

  return (
    <section id="collection-cabinets" className="py-12">
      <div className="flex justify-center items-center text-center">
        <div className="w-full max-w-screen-xl px-4">
          <div className="space-y-6">
            <div className="flex flex-col items-center">
               <div className="py-12 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="flex flex-col text-left basis-1/2">
                  <p className="inline-block mb-2 text-lg text-[#b0984b]">Filheim FAQ</p>
                  <p 
                    className="sm:text-4xl text-3xl font-extrabold text-base-content" 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Frequently Asked <br /> Questions</p>
                </div>
                <ul className="basis-1/2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {faqs.map((faq, index) => (
                    <li key={index}>
                      <button
                        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                        aria-expanded={openIndex === index}
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className="flex-1 text-base-content">{faq.question}</span>
                        <FaCaretDown 
                          className={`text-[#9A7842] flex-shrink-0 w-4 h-4 ml-auto transform transition-transform duration-200 ${
                            openIndex === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}
                      >
                        <div className="pb-5 text-left text-md">
                          <div className="space-y-1">{faq.answer}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesFAQ;