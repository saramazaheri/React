import React, { Component } from "react";

import ClassEvent from "./ClassEvent";

//import FunctionEvent from "./FunctionEvent";

import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <ClassEvent />
        {/*<FunctionEvent />*/}
      </div>
    );
  }
}

export default App;
