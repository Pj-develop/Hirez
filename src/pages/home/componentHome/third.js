import React from "react";
import "./third.css";
import Lottie from "lottie-react";
export default function third() {
  return (
    <div className="third">
      <div className="thirdLeft">
        <h2 id="Head">
          Recruit talent across <br />
          domains
        </h2>
        <p className="p1">
          Talent Acquisition Made Easy: Effortless <br />
          Registration, Simplified Job Posting, and Faster Applications
        </p>
        <div className="featres">
          <div>
            <ul className="feat1">
              <h2 className="feat1H">
                <i className="bi bi-box-arrow-right"></i> Register with us
              </h2>
              <p className="feat1P">
                use your company mail to create your account <br /> and start
                posting jobs{" "}
              </p>
            </ul>
          </div>
          <div>
            <ul className="feat2">
              <h2 className="feat2H">
                <i className="bi bi-briefcase"></i> Post your jobs
              </h2>
              <p className="feat1P">
                use your company mail to create your account
                <br /> and start posting jobs{" "}
              </p>
            </ul>
          </div>
          <div>
            <ul className="feat3">
              <h2 className="feat3H">
                <i className="bi bi-bar-chart"></i> Hire Best talent
              </h2>
              <p className="feat1P">
                Let our AI help find the best talent fast
                <br /> and start posting jobs
              </p>
            </ul>
          </div>
        </div>
      </div>

      <div className="thirdRight">
        <Lottie animationData={require("./thirdHired.json")} />
      </div>
    </div>
  );
}
