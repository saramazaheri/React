import React, { PureComponent } from "react";

import Child from "./Child";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: "HI",
    };
  }
  reSet = () => {
    this.setState({
      text: "HI",
    });
  };
  render() {
    console.log("App is rendered");
    return (
      <div>
        <button onClick={this.reSet}>reSet</button>
        <h1>{this.state.text}</h1>
        <Child text={this.state.text} />
      </div>
    );
  }
}

export default App;
