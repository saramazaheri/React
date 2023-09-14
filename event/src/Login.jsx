import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoggenIn: false,
      isHiBye: false,
    };
  }
  render() {
    //option 1
    // let text;
    // if (this.state.isHiBye) {
    //   text = <h1>Hi World!</h1>;
    // } else {
    //   text = <button>Bye World</button>;
    // }
    // return <div>{text}</div>;
    //option2
    // if (this.state.isLoggenIn) {
    //   return (
    //     <div>
    //       <h1>Wellcome!</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <button>Login</button>
    //       <br />
    //       <br />
    //     </div>
    //   );
    // }
    //option3
    return (
      <div>
        {this.state.isLoggenIn ? <h1>Wellcome</h1> : <button>Login</button>}
        {this.state.isLoggenIn && <h1>Wellcome</h1>}
      </div>
    );
  }
}

export default Login;
