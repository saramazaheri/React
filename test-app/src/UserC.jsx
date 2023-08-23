import React, { Component } from "react";

class UserC extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sara",
      age: 22,
    };
  }
  render() {
    const { name, age } = this.state;
    const { lastname, career } = this.props;
    const header = { color: "blue", fontSize: 20 };
    return (
      <div>
        <p>
          Hi, my name is {name} {lastname} and I am {age} years old.
        </p>
        <p style={header}>I am a {career}</p>
      </div>
    );
  }
}

export default UserC;
