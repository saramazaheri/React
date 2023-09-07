import React, { Component } from "react";

//import styled from "styled-components";

const MyDiv = styled.div`
  background-color: red;
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

class TestComponents extends Component {
  render() {
    return (
      <MyDiv>
        <p>Hi, this is an update</p>
        <p>Hi, this is an update</p>
        <p>Hi, this is an update</p>
        <p>Hi, this is an update</p>
      </MyDiv>
    );
  }
}

export default TestComponents;
