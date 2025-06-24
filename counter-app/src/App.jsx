import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = {
    increment: () => setCount((prev) => prev + 1),
    decrement: () => setCount((prev) => prev - 1),
    reset: () => setCount(0),
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleCount.increment}>Increment</button>
      <button onClick={handleCount.decrement}>Decrement</button>
      <button onClick={handleCount.reset}>Reset</button>
    </>
  );
}

export default App;
