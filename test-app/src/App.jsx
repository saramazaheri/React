import React, { Component } from "react";

import UserC from "./UserC";

import UserF from "./UserF";

import "./App.css";

import styles from "./App.module.css";

class App extends Component {
  header = { color: "red", fontSize: 20 };
  constructor() {
    super();
    this.state = {
      // name: "Benz",
      // speed: "250",
      number: 0,
    };
  }

  upOne = () => {
    // this.setState({
    //   name: "BMW",
    // this.setState({
    //   number: this.state.number + 1,
    // });
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  };

  upThree = () => {
    this.upOne();
    this.upOne();
    this.upOne();
  };

  render() {
    return (
      <div>
        {/* <p>
          My first car is {this.state.name} and it has {this.state.speed} speed.
        </p> */}
        {/* <button onClick={this.ChangeHandler}>Change</button> */}
        <h1 className="header">Hello world</h1>
        <h1 className={styles.header}>Hello world</h1>
        <h1>{this.state.number}</h1>
        <h2 style={this.header}>This color is red</h2>
        <button onClick={this.upThree}>Count</button>
        <UserC lastname="Mazaheri" career="Programmer" />
        <UserF Country="Iran" City="Tehran" />
      </div>
    );
  }
}
export default App;
