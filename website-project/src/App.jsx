import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import DetailsPage from "./Components/DetailsPage";
import NotFound from "./Components/NotFound";
import AboutUs from "./Components/AboutUs";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/NotFound" element={<NotFound />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/*" element={<Navigate to="/NotFound" />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
