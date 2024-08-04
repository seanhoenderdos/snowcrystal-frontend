// src/components/Tooltip.jsx
import React from "react";

const Tooltip = ({ content, position }) => {
  return (
    <div
      className="absolute p-2 bg-white text-black rounded shadow-md z-10"
      style={{ top: position.y + window.scrollY, left: position.x }}
    >
      {content}
    </div>
  );
};

export default Tooltip;
