import React, { Component } from "react";

import styles from "./Card.module.css";

import down from "../images/down.svg";

import up from "../images/up.svg";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    }
  };

  upHandler = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  render() {
    const { image, name, click } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="4cards" />
        <h3>{name}</h3>

        <p>
          {click} {counter ? `* ${counter} = ${counter * click} $` : ""}
        </p>
        <div className={styles.counter}>
          <img
            className={!this.state.counter && styles.deactive}
            src={down}
            alt="arrow"
            onClick={this.downHandler}
          />
          <span>{counter}</span>
          <img src={up} alt="arrow" onClick={this.upHandler} />
        </div>
      </div>
    );
  }
}

export default Card;
