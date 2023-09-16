import React, { Component } from "react";

class Cars extends Component {
  constructor() {
    super();
    this.state = {
      cars: ["Ferrari, Benz, Tesla"],
    };
  }
  render() {
    return (
      <div>
        <h1>My Cars:</h1>
        {this.state.cars.map(car => <p>{}</p>)}
      </div>
    );
  }
}

export default Cars;
