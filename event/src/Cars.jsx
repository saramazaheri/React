import React, { Component } from "react";

import { v4 } from "uuid";

class Cars extends Component {
  constructor() {
    super();
    this.state = {
      cars: [
        { id: 1, name: "Ferrari" },
        { id: 2, name: "Benz" },
        { id: 3, name: "Tesla" },
        { id: 4, name: "BMW" },
      ],
    };
  }
  render() {
    const { cars } = this.state;
    return (
      <div>
        <h1>My Cars:</h1>
        {cars.map((car) => (
          <p key={v4()}>
            Hi I am from a {car.name} company - {v4()}
          </p>
        ))}
      </div>
    );
  }
}

export default Cars;
