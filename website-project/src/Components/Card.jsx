import React, { Component } from "react";

import { Link } from "react-router-dom";

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
    const { image, name, click, id } = this.props;
    const { counter } = this.state;
    let text;
    if (counter == 0) {
      text = <p>{click}</p>;
    } else {
      text = <p>{counter * click}</p>;
    }
    return (
      <div className={styles.container}>
        <img src={image} alt="4cards" />
        <h3>
          <Link to={`/products/${id}`}>{name}</Link>
        </h3>
        <p>{text}</p>
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
