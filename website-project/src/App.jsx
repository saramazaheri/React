import React, { Component } from "react";

import Navbar from "./Components/Navbar";

import Baner from "./Components/Baner";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Baner />
      </div>
    );
  }
}

export default App;
