import React from "react";
import Button from "./Button";
import Section from "./Section";
import Heading from "./Heading";

const Contact = () => {
  return (
    <Section id="contact-us">
      <div className="container md:pb-10 w-full">
        <Heading title={"Contact Us"} tag={"We'd love to hear from you"} />
        <div className="flex justify-start md:justify-center">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6 bg-n-8 rounded-lg shadow-md max-w-xl w-full"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-n-1"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-stroke-1 rounded-md shadow-sm focus:outline-none focus:ring-[#FFB6C1] focus:border-[#FFB6C1] sm:text-sm text-n-4"
                autoComplete="name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-n-1"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-stroke-1 rounded-md shadow-sm focus:outline-none focus:ring-[#FFB6C1] focus:border-[#FFB6C1] sm:text-sm text-n-4"
                autoComplete="email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-n-1"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                className="mt-1 block w-full px-3 py-2 border border-stroke-1 rounded-md shadow-sm focus:outline-none focus:ring-[#FFB6C1] focus:border-[#FFB6C1] sm:text-sm text-n-4"
                autoComplete="off"
              ></textarea>
            </div>
            <div className="flex lg:justify-center">
              <Button type="submit" className="w-full" white>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
