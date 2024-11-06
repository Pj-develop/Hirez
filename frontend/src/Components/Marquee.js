// Marquee.js
import React from "react";
import "./Marquee.css";

const Marquee = ({ logos, speed }) => {
  return (
    <div className="block">
      <div className="marquee-container" style={{ animationDuration: speed }}>
        {logos.map((logo, index) => (
          <div key={index} className="marquee-logo">
            <img src={logo} alt={`Company Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
