import React, { Component } from "react";
class Blogs extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <h1>Blogs:</h1>
        <p>This author is {this.props.match.params.author}</p>
      </div>
    );
  }
}

export default Blogs;
