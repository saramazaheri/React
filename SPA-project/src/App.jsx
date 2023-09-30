import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Blogs from "./Components/Blogs";
import AboutUs from "./Components/AboutUs";
import Products from "./Components/Products";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">HomePage</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="aboutus">AboutUs</a>
          </li>
          <li>
            <a href="products">Products</a>
          </li>
        </ul>
        <div>
          <Route path="/" component={HomePage} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/products" component={Products} />
        </div>
      </div>
    );
  }
}

export default App;
