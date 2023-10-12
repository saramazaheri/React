import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Products from "./Components/Products";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
