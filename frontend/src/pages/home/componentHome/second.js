import React from "react";
import "./second.css";
import Marquee from "../../../Components/Marquee";

export default function second() {
  const logos = [
    require("./google1.png"),
    require("./microsoft.png"),
    require("./netflix.png"),
    require("./firstcry.png"),
    require("./paytm.png"),
    require("./infosys.png"),
    require("./allianz.png"),
    require("./wipro.png"),
  ]; // Replace with your logo URLs
  const speed = "20s"; // Adjust the speed of the marquee animation

  return (
    <div className="second">
      <div className="box1">
        <div className="texthead h1">
          <p className="h1 text-head">Top Companies Hiring Now !!</p>
        </div>
        <div className="icon-flex">
          <div className="animation-container">
            <Marquee logos={logos} speed={speed} />
          </div>
        </div>
        <div className="box2">
          <button className="btn-connect">Connect With Us</button>
        </div>
      </div>
    </div>
  );
}
