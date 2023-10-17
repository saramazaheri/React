import React from "react";

import { useNavigate } from "react-router-dom";

function AboutUs() {
  const Navigate = useNavigate();
  const clickHandler = () => {
    Navigate("/", { replace: true });
  };
  return (
    <div>
      <br />
      <h1>About Us</h1>
      <br />
      <button onClick={clickHandler}>Go Home</button>
      <br />
      <br />
    </div>
  );
}

export default AboutUs;
