//Class Components
// import React, { PureComponent } from "react";

// class Child extends PureComponent {
//   render() {
//     console.log("Child is rendered");
//     return <div>{this.props.text} Child</div>;
//   }
// }

// export default Child;

//Functional Components
// import React from "react";

// const Child = (props) => {
//   console.log("Child is rendered");
//   return <div>{props.text} Child</div>;
// };

// export default React.memo(Child);

import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  Showref = () => {
    console.log(this.input.current.value);
  };
  componentDidMount() {
    this.input.current.focus();
  }
  render() {
    return (
      <div>
        <button onClick={this.Showref}>Show</button>
        <input ref={this.input} type="text" />
      </div>
    );
  }
}

export default Child;
