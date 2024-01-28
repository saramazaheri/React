import React from "react";
import Header from "./Header";
import Test from "./Test";
import Courses from "./Courses";
import Banner from "./Banner";
import Counter from "./Counter";
import Form from "./Form";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Counter />
      <Banner title="Introduction" age={23} />
      <Test />
      <div>
        <h1> I am 23 years old</h1>
      </div>
      <div>
        <p>I am from Tehran</p>
      </div>
      <Courses />
      <Form />
    </React.Fragment>
  );
}

export default App;
