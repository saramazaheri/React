import React from "react";

import { useNavigate } from "react-router-dom";

function AboutUs() {
  const Navigate = useNavigate();
  const clickHandler = () => {
    Navigate("/", { replace: true });
  };
  return (
    <div>
      <h1>About Us</h1>
      <button onClick={clickHandler}>Go Home</button>
    </div>
  );
}

export default AboutUs;
