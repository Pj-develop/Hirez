import React from "react";
import First from "./componentHome/first";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Third from "./componentHome/third";
library.add(fab);
function home() {
  return (
    <div>
      <First />
      <Third />
    </div>
  );
}

export default home;
