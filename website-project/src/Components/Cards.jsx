import React, { Component } from "react";

import styles from "./Cards.module.css";

import Card from "./Card";

import pic1 from "../images/1.jpg";
import pic2 from "../images/3.jpg";
import pic3 from "../images/4.jpg";
import pic4 from "../images/5.jpg";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phoneData: [
        { id: 1, image: pic1, name: "Refah Bank1", click: "100" },
        { id: 2, image: pic2, name: "Refah Bank2", click: "200" },
        { id: 3, image: pic3, name: "Refah Bank3", click: "300" },
        { id: 4, image: pic4, name: "Refah Bank4", click: "400" },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {/* <Card image={pic1} name="Refah Bank1" click="100" />
        <Card image={pic2} name="Refah Bank2" click="200" />
        <Card image={pic3} name="Refah Bank3" click="300" />
        <Card image={pic4} name="Refah Bank4" click="400" /> */}
        {this.state.phoneData.map((phone) => (
          <Card
            key={phone.id}
            image={phone.image}
            name={phone.name}
            click={phone.click}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
