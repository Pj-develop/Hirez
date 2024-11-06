import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./fifth.css";

export default function Fifth() {
  return (
    <div className="fifth">
      <div className="box1">
        <div className="cBox">
          <div className="man-image"></div>

          <p className="textPromo">
            The <span className="sp1">Biggest</span> Revolution is Yet
            <br />
            to <span className="sp2">Come</span>!!
          </p>
          <div className="man-image"></div>
        </div>
        {/* Link to /company/signup for Employer Login */}
        <Link to="/company/signup" className="btn-login">
          Employer Login <i className="bi bi-box-arrow-in-right"></i>{" "}
        </Link>

        {/* Link to /finds for Find Job */}
        <Link to="/find" className="btn-1">
          Find Job <i className="bi bi-search"></i>{" "}
        </Link>

        <button className="btn-2">
          Connect With Us <i className="bi bi-arrow-right-circle"></i>{" "}
        </button>
      </div>
    </div>
  );
}
