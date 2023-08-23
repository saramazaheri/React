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
    return (
      <div>
        <p>
          Hi, my name is {this.state.name} and I am {this.state.age} years old.
        </p>
      </div>
    );
  }
}

export default UserC;
