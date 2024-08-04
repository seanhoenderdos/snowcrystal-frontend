import React, { useState } from "react";
import Heading from "./Heading";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className="text-[2rem] leading-10">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <p className="mt-2 text-n-4">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "What is included in the UX/UI Design service?",
      answer:
        "We provide comprehensive UX/UI design for both apps and websites, focusing on creating visually appealing and user-friendly interfaces.",
    },
    {
      question: "Do you offer development services for apps?",
      answer:
        "Currently, we only provide development services for websites that we design. However, we do offer UX/UI design services for apps.",
    },
    {
      question: "What types of websites do you specialize in?",
      answer:
        "We specialize in creating high-quality, mobile-responsive websites with a strong focus on UX/UI design to ensure the best user experience.",
    },
    {
      question: "Can I upgrade my package later?",
      answer:
        "Yes, you can upgrade your package at any time to access more features and services.",
    },
    {
      question:
        "Do you provide ongoing maintenance for the websites you design?",
      answer:
        "We offer monthly maintenance packages to ensure your website remains up-to-date and performs optimally.",
    },
    {
      question: "What is your process for designing and developing a website?",
      answer:
        "Our process involves understanding your requirements, creating a design prototype, iterating based on feedback, and then developing the website once the design is finalized.",
    },
    {
      question: "What is your process for designing and developing a website?",
      answer:
        "Our process involves understanding your requirements, creating a design prototype, iterating based on feedback, and then developing the website once the design is finalized.",
    },
    {
      question: "How long does it take to design and develop a website?",
      answer:
        "The timeline depends on the complexity of the project and the package chosen. We will provide an estimated timeline after understanding your specific requirements.",
    },
    {
      question: "Do you offer support for the websites you develop?",
      answer:
        "Yes, we provide support and maintenance to ensure your website runs smoothly. Details about support packages can be discussed based on your needs.",
    },
    {
      question: "What is included in the SEO service?",
      answer:
        "Our SEO services include technical and on-page optimization to improve your website's visibility on search engines.",
    },
    {
      question:
        "How do you handle the integration of third-party tools like Google My Business and WhatsApp Chat?",
      answer:
        "We handle the complete setup and integration of these tools to ensure seamless functionality on your website.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center mb-24 lg:gap-24">
      <div className="w-full lg:w-1/2 max-w-4xl p-4 text-n-1">
        <Heading
          title={"Frequently asked questions"}
          text={
            <>
              Haven’t found what you’re looking for?{" "}
              <a href="/#contact" className="text-n-4 hover:text-[#FF6442]">
                Contact us
              </a>
            </>
          }
        />
      </div>
      <div className="w-full lg:w-2/3">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
