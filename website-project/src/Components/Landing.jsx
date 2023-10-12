import React, { Component } from "react";

import Baner from "./Baner";

import Cards from "./Cards";

import Search from "./Search";

import Logos from "./Logos";
class Landing extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <Baner />
        <Cards />
        <Search />
        <Logos />
      </div>
    );
  }
}

export default Landing;
