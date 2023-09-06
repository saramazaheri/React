import React from "react";

import styles from "./Logos.module.css";
import branch1 from "../images/1b.png";
import branch2 from "../images/2b.png";

const Logos = () => {
  return (
    <div className={styles.container}>
      <h3>Subsidiary companies of Refah Bank</h3>
      <div>
        <img src={branch1} alt="logo" />
        <img src={branch2} alt="logo" />
      </div>
    </div>
  );
};

export default Logos;
