import React, { useState } from "react";
import Button from "@mui/material/Button";
function ButtonUsage(props) {
  return <Button variant="contained">{props.children}</Button>;
}
function Counter() {
  const [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  return (
    <div className="mybox">
      <h1>Counter:{count}</h1>
      <ButtonUsage>Increment</ButtonUsage>
      <ButtonUsage>Decrement</ButtonUsage>
    </div>
  );
}

export default Counter;
