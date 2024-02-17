import React from "react";
import "./fourth.css";
import Lottie from "lottie-react";

export default function Fourth() {
  return (
    <div className="fourth">
      <div className="fourthLeft">
        <h2 id="Head">Welcome to Hirez</h2>
        <p className="p1">
          Your Gateway to Exceptional Talent and Career Opportunities
        </p>
        <div className="featres">
          <div>
            <h2 className="feat1H">
              <i className="bi bi-award-fill"></i> Achievements
            </h2>
            <ul className="feat1">
              <li>Total Jobs Posted: 1000+</li>
              <li>Active job seekers: 10000+</li>
              <li>Total Hire made: 1000+</li>
            </ul>
          </div>
          <div>
            <h2 className="feat2H">
              <i className="bi bi-briefcase"></i> Tops skills in demand
            </h2>
            <ul className="feat2">
              <li>React</li>
              <li>MongoDB</li>
              <li>Django</li>
              <li>Cloud deployment</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fourthRight">
        <Lottie animationData={require("./fourthHired.json")} />
      </div>
    </div>
  );
}
