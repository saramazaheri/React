import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Benz",
      speed: "250",
    };
  }

  ChangeHandler = () => {
    this.setState({
      name: "BMW",
    });
  };

  render() {
    return (
      <div>
        <p>
          My first car is {this.state.name} and it has {this.state.speed} speed.
        </p>
        <button onClick={this.ChangeHandler}>Change</button>
      </div>
    );
  }
}
export default App;
