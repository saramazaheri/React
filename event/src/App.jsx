import React, { Component } from "react";

import ClassEvent from "./ClassEvent";

//import FunctionEvent from "./FunctionEvent";

import Login from "./Login";

import Cars from "./Cars";

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <ClassEvent />
        {/*<FunctionEvent />*/}
        <Cars />
      </div>
    );
  }
}

export default App;
