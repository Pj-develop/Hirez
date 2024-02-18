import React from "react";
import "./first.css";
import Lottie from "lottie-react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function first() {
  return (
    <div className="Hero">
      <div className="left">
        <strong>
          Unlock your Career <br />
          Potential with <br /> Hirez!
        </strong>

        <div>
          <button className="find-jobs-button">
            Find Jobs <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div className="right">
        <Lottie animationData={require("./hired.json")} />
      </div>
    </div>
  );
}
