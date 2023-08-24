import React from "react";

import styles from "./Baner.module.css";

import baner from "../images/101_1_1000_1000.jpg/";

const Baner = () => {
  return (
    <div className={styles.container}>
      <img src={baner} alt="baner" />
      <div className={styles.textcontainer}>
        <h1>Refah Bank</h1>
        <p>
          Bank Refah, is one of Iran's major banks. Bank Refah, with its
          headquarters in Tehran, Iran, is a retail commercial bank owned and
          controlled by Social Security Organization of Iran.
        </p>
      </div>
    </div>
  );
};

export default Baner;
