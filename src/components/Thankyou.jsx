import React, { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import axios from "axios"; // Import axios for making HTTP requests

const Thankyou = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnboard = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/send-email", {
        email,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error sending email");
    }
  };

  return (
    <Section className="overflow-hidden">
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
        <div className="hidden relative justify-center mb-[4.5rem] lg:flex"></div>
        <Heading
          tag="Thank you! Let's start getting crystal clear"
          title="Enter your email to onboard"
          className="flex flex-col items-center justify-center"
        />
        <div className="flex justify-center gap-5 m-20">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 rounded-lg text-left p-2"
            value={email}
            onChange={handleEmailChange}
          />
          <Button white onClick={handleOnboard}>
            Onboard
          </Button>
        </div>
        {message && <p>{message}</p>} {/* Display message */}
      </div>
    </Section>
  );
};

export default Thankyou;
