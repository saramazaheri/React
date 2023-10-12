import React from "react";

// import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

import logo from "../images/Refah bank logo Vector.png";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.listcontainer}>
        <ul className={styles.list}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
        </ul>
      </div>
      <div className={styles.logo}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Navbar;
