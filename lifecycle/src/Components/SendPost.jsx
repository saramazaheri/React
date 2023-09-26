import React, { Component } from "react";
import axios from "axios";
class SendPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  postHandler = () => {
    const text = this.state.title;
    axios
      .post("/posts/", { title: text })
      .then((response) => console.log(response.status));
  };
  render() {
    const { title } = this.state;
    return (
      <div>
        <input type="text" value={title} onChange={this.changeHandler} />
        <button onClick={this.postHandler}>Send Post</button>
      </div>
    );
  }
}

export default SendPost;
