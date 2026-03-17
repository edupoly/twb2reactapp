import { useReducer } from "react";
import { counterReducer } from "./reducers";
function Counter() {
  var [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="mybox">
      <h1>Counter:{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
