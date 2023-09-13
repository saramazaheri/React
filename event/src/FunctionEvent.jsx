import React from "react";

const FunctionEvent = () => {
  function clickHandler() {
    alert("Function Clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Function Event</button>
    </div>
  );
};

export default FunctionEvent;
