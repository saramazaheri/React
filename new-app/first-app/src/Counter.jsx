import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseHandler = () => setCounter((counter) => counter + 1);
  const increaseHandler3 = () => setCounter((counter) => counter + 3);
  const stopHandler = () => setCounter("-");
  const decreaseHandler = () => setCounter((counter) => counter - 1);
  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={increaseHandler}>Increase1</button>
      <button onClick={increaseHandler3}>Increase3</button>
      <button onClick={stopHandler}>Stop</button>
      <button onClick={decreaseHandler}>Decrease</button>
    </div>
  );
};

export default Counter;
