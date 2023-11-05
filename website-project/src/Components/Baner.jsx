import React from "react";

import styles from "./Baner.module.css";

import baner from "../images/101_1_1000_1000.jpg/";

const Baner = () => {
  return (
    <div className={styles.container}>
      <img src={baner} alt="baner" />
      <div className={styles.textcontainer}>
        <h1>Cat Shop</h1>
        <p>
          Climb a tree, wait for a fireman jump to fireman then scratch his face
          use lap as chair. Break lamps and curl up into a ball i could pee on
          this if i had the energy yet cats making all the muffins for love me!
          and human give me attention meow.
        </p>
      </div>
    </div>
  );
};

export default Baner;
