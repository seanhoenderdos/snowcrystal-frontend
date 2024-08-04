import React, { useState, Suspense, lazy } from "react";
import Section from "./Section";
import { check, featureinfo } from "../assets";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import CompanyLogos from "./CompanyLogos";
import Heading from "./Heading";
import Testimonials from "./Testimonial"; // Import Testimonials
import FAQ from "./Faq";

// Use lazy for dynamic import
const Tooltip = lazy(() => import("./Tooltip"));

const DetailedPricingTable = () => {
  const [tooltip, setTooltip] = useState({
    show: false,
    content: "",
    position: { x: 0, y: 0 },
  });

  const plans = ["Basic", "Premium", "Custom"];
  const features = [
    {
      name: "UX/UI Design",
      available: ["UI Design", "UI Design", true],
      description: "High-quality design",
    },
    {
      name: "Free Stock Images",
      available: [true, true, true],
      description: "Access to a library of stock images",
    },
    {
      name: "YouTuve Video/Free Stock Videos",
      available: [true, true, true],
      description: "Embed YouTube videos or access free stock videos",
    },
    {
      name: "Mobile Responsive",
      available: [true, true, true],
      description: "Ensures compatibility with mobile devices",
    },
    {
      name: "SEO",
      available: ["Technical", "On-Page", "On-Page"],
      description: "SEO services included",
    },
    {
      name: "Contact Form",
      available: ["1 form", "2 forms", "unlimited"],
      description: "Forms for user interaction",
    },
    {
      name: "Pages",
      available: ["1-5", "6-13", "unlimited"],
      description: "Number of pages included",
    },
    {
      name: "Social Media Integration",
      available: [true, true, true],
      description: "Integrate with social media platforms",
    },
    {
      name: "Google My Business",
      available: [false, true, true],
      description: "Set up and manage Google My Business",
    },
    {
      name: "WhatsApp Chat",
      available: [true, true, true],
      description: "Enable WhatsApp chat on your website",
    },
    {
      name: "Analytics",
      available: [false, true, true],
      description: "Track traffic and user actions on yyour website.",
    },
    {
      name: "API Integrations",
      available: [false, false, true],
      description: "Advanced API integrations",
    },
  ];

  const handleMouseEnter = (event, description) => {
    const rect = event.target.getBoundingClientRect();
    setTooltip({
      show: true,
      content: description,
      position: { x: rect.right, y: rect.top },
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, content: "", position: { x: 0, y: 0 } });
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] px-4 sm:px-8 md:px-20 flex flex-col gap-32"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <div className="relative">
        <Heading
          tag="Get Started with Snowcrystal"
          title="Pay once, use forever"
        />
        <PricingList />
        <LeftLine />
        <RightLine />
      </div>

      <CompanyLogos className="hidden relative z-10 lg:block" />

      <div className="w-full overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="leading-[60px]">
              <th className="px-4 py-2 text-left text-xl leading-[60px]">
                Features
              </th>
              {plans.map((plan) => (
                <th
                  key={plan}
                  className="px-4 py-2 text-center text-lg font-semibold leading-[60px]"
                >
                  {plan}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-t leading-[40px]">
                <td className="px-4 py-2 relative">
                  {feature.name}
                  <span
                    className="ml-2 cursor-pointer"
                    onMouseEnter={(e) =>
                      handleMouseEnter(e, feature.description)
                    }
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={featureinfo}
                      alt="info"
                      className="w-4 h-4 inline-block text-gray-400 hover:text-gray-600"
                    />
                  </span>
                </td>
                {feature.available.map((item, idx) => (
                  <td key={idx} className="px-4 py-2 text-center">
                    <div className="flex justify-center items-center h-full">
                      {item === true ? (
                        <img
                          src={check}
                          width={24}
                          height={24}
                          alt="check"
                          className="inline-block"
                        />
                      ) : item === false ? (
                        ""
                      ) : (
                        item
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-10">
        <Heading
          tag={"Get Started"}
          title={"Our Most Recent Client Said"}
          className="mt-20"
        />
        <Testimonials />
      </div>

      <FAQ />

      {tooltip.show && (
        <Suspense fallback={<div>Loading...</div>}>
          <Tooltip content={tooltip.content} position={tooltip.position} />
        </Suspense>
      )}
    </Section>
  );
};

export default DetailedPricingTable;
