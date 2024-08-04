import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailedPricingTable from "./components/DetailedPricingTable";
import ButtonGradient from "./assets/svg/ButtonGradient";

const PricingPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <DetailedPricingTable />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default PricingPage;
