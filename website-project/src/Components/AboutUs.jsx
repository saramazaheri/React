import React from "react";

import { Link, Route, Routes, Outlet } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Programmers from "./Programmers";

function AboutUs() {
  const Navigate = useNavigate();
  const clickHandler = () => {
    Navigate("/", { replace: true });
  };
  return (
    <div>
      <Outlet />
      <br />
      <h1>About Us</h1>
      <ul>
        <li>
          <Link to="programmers">Programmers</Link>
        </li>
        <li>
          <Link to="drivers">Drivers</Link>
        </li>
      </ul>
      <div>
        {/* <Routes>
          <Route path="programmers" element={<Programmers />}></Route>
          <Route path="drivers" element={<h1>Drivers</h1>}></Route>
        </Routes> */}
      </div>
      <br />
      <button onClick={clickHandler}>Go Home</button>
      <br />
      <br />
    </div>
  );
}

export default AboutUs;
