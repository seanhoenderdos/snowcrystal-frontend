import React from "react";
import { testimonials } from "../constants"; // Adjust import

const Testimonial = ({ name, role, message, image }) => {
  return (
    <div className="text-n-1 rounded-2xl border-[1px] border-stroke-1">
      <p className="mb-4 p-6">{message}</p>
      <div className="flex items-center bg-n-6 p-6 rounded-b-2xl text-n-1">
        <img
          src={image}
          alt={`${name}'s avatar`}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const isSingleItem = testimonials.length === 1;

  return (
    <div
      className={`grid gap-6 mt-10 ${
        isSingleItem
          ? "grid-cols-1 w-full md:w-1/3 mx-auto"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          role={testimonial.role}
          message={testimonial.message}
          image={testimonial.image}
        />
      ))}
    </div>
  );
};

export default Testimonials;
