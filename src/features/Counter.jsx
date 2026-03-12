import React from "react";
import { useCounter } from "../hooks/useCounter";
function Counter() {
  var [count, incCounter, decCounter] = useCounter();
  return (
    <div className="mybox">
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          incCounter();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          decCounter();
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
