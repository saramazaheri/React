import React, { Component } from "react";

import styles from "./Card.module.css";

class Card extends Component {
  render() {
    const { image, name, click } = this.props;
    return (
      <div className={styles.container}>
        <img src={image} alt="4cards" />
        <h3>{name}</h3>
        <button>{click}</button>
      </div>
    );
  }
}

export default Card;
