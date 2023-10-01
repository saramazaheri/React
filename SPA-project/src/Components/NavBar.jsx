import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/blogs/sara">Blogs</Link>
          </li>
          <li>
            <Link to="aboutus">AboutUs</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
