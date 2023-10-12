import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import styles from "./Products.module.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => this.setState({ products: response.data }));
  }
  render() {
    return (
      <div className={styles.container}>
        {this.state.products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            name={product.title}
            click={product.price}
          />
        ))}
      </div>
    );
  }
}

export default Products;
