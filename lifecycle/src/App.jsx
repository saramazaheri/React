import React, { Component } from "react";
import Child from "./Child";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: "Hi",
      isShown: true,
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  removeHandler = () => {
    this.setState(
      (isShown = false)
      // text: "Bye",
    );
  };
  render() {
    console.log("render");
    return (
      <div>
        {this.state.isShown && <Child />}
        {/* <Child /> */}
        {/* <h1>{this.state.text}</h1> */}
        <button onClick={this.removeHandler}>remove</button>
      </div>
    );
  }
}

export default App;
