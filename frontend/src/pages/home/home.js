import React from "react";
import First from "./componentHome/first";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Third from "./componentHome/third";
import Second from "./componentHome/second";
import Fifth from "./componentHome/fifth";
// import "./style4.css";
library.add(fab);
function home() {
  return (
    <div>
      <First />
      <Third />
      <Second />
      <Fifth />
    </div>
  );
}

export default home;
