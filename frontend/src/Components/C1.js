import React from "react";
import C1Image from "../Public/C1.svg"; // Import the image file
import Image from "react-bootstrap/Image";

export default function C1() {
  return (
    <div>
      <Image src={C1Image} alt="C1" fluid />
    </div>
  );
}
