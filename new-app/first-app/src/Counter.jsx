function Counter() {
  function increaseHandler() {
    console.log("Increase!");
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  );
}

export default Counter;
