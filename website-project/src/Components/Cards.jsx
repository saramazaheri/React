import React, { Component } from "react";

import styles from "./Cards.module.css";

import Card from "./Card";

import pic1 from "../images/1.jpg";
import pic2 from "../images/3.jpg";
import pic3 from "../images/4.jpg";
import pic4 from "../images/5.jpg";

class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={pic1} name="Refah Bank" click="Click here" />
        <Card image={pic2} name="Refah Bank" click="Click here" />
        <Card image={pic3} name="Refah Bank" click="Click here" />
        <Card image={pic4} name="Refah Bank" click="Click here" />
      </div>
    );
  }
}

export default Cards;
