import React, { Component } from "react";

import UserC from "./assets/User";

class App extends Component {
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
        <h1>{this.state.number}</h1>
        <button onClick={this.upThree}>Count</button>
        <UserC />
      </div>
    );
  }
}
export default App;
