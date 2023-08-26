import React, { Component } from "react";

import Navbar from "./Components/Navbar";

import Baner from "./Components/Baner";

import Cards from "./Components/Cards";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Baner />
        <Cards />
      </div>
    );
  }
}

export default App;
