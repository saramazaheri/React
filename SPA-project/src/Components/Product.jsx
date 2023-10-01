import React, { Component } from "react";
class Product extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <h1>This is product #{this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default Product;
