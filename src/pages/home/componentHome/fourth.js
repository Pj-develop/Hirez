import React from "react";
import "./fourth.css";
import Lottie from "lottie-react";
export default function fourth() {
  return (
    <div className="fourth">
      <div className="fourthLeft">
        <h2 id="Head">Welcome to Hirez</h2>
        <p className="p1">
          Your Gateway to Exceptional Talent and Career Opportunities
        </p>
        <div className="featres">
          <div>
            <ul className="feat1">
              <h2 className="feat1H">
                <i className="bi bi-award-fill"></i> Achievements
              </h2>
              <p className="feat1P">
                <ul>Total Jobs Posted: 1000+</ul>
                <ul>Active job seekers: 10000+</ul>
                <ul>Total Hire made: 1000+</ul>
              </p>
            </ul>
          </div>
          <div>
            <ul className="feat2">
              <h2 className="feat2H">
                <i className="bi bi-briefcase"></i> Tops skills in demand
              </h2>
              <p className="feat1P">
                <ul>React</ul>
                <ul>MongoDB</ul>
                <ul>django</ul>
                <ul>Cloud deployment</ul>{" "}
              </p>
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
