import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const { title, body, deletePost } = this.props;
    return (
      <div style={{ border: "1px grey solid", margin: "10px" }}>
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={deletePost}>Delete</button>
      </div>
    );
  }
}

export default Post;
