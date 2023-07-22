// import sum, { name, sayHi } from "./app.js";
// console.log(name);
// sayHi();
// console.log(sum(2, 5));

class vehicle {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  speed() {
    console.log(this);
    console.log("I go");
  }
}

class car extends vehicle {
  constructor(color, model, year) {
    super(color, model);
    this.year = year;
  }
}
const vehicle1 = new vehicle("red", "bmw");
console.log(vehicle1);

const car1 = new car("pink", "fulex", 2023);
console.log(car1);
