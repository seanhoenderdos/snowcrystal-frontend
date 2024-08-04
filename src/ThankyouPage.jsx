import React from "react";
import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Thankyou from "./components/Thankyou";
import Footer from "./components/Footer";

const ThankyouPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Thankyou />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default ThankyouPage;
