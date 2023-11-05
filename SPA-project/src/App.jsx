import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Blogs from "./Components/Blogs";
import AboutUs from "./Components/AboutUs";
import Products from "./Components/Products";
import NavBar from "./Components/NavBar";
import Product from "./Components/Product";
import Notfound from "./Components/Notfound";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <div>
          <NavBar />
          <Routes>
            <Route path="/products/:id" component={Product} />
            <Route
              path="/blogs/:author?"
              component={Blogs}
              // render={(props) => <Blogs name="Sara" {...props} />}
            />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/products" component={Products} />
            {/* <Redirect from="/articles" to="/blogs" /> */}
            <Route exact path="/" component={HomePage} />
            <Route path="/notfound" component={Notfound} />
            {/* <Redirect to="/notfound" /> */}
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
