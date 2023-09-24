import React, { PureComponent } from "react";

import Child from "./Child";

import axios from "axios";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: "HI",
    };
    this.state = { postData: [] };
  }
  //JsonPlaceHolder
  // getPost = () => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // };
  componentDidMount() {
    //json placeholder
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => this.setState({ postData: json }));

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => console.log(response));
  }

  reSet = () => {
    this.setState({
      text: "HI",
    });
  };
  render() {
    console.log("App is rendered");
    return (
      <div>
        <button onClick={this.reSet}>reSet</button>
        <h1>{this.state.text}</h1>
        <Child text={this.state.text} />

        {/* <button onClick={this.getPost}>get post</button>
        <h1>Posts:</h1>
        {this.state.postData.map((post) => (
          <p key={post.id}>{post.title}</p>
        ))} */}
      </div>
    );
  }
}

export default App;
