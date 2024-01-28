import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: silver;
  color: ${(props) => (props.selected ? "blue" : "green")};
  @media (max-width: 1200px) {
    background-color: green;
    &:hover {
      color: yellow;
    }
  }
`;

function Banner({ title, age }) {
  const [selected, setSelected] = useState(true);
  return (
    <Div selected={selected}>
      <hr />
      <p>My name is Sara</p>
      <p>{title}</p>
      <p>{age} years old</p>
      <button onClick={() => setSelected((s) => !s)}>Change</button>
      <hr />
    </Div>
  );
}

export default Banner;
