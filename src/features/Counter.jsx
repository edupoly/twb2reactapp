import React from "react";
import Button from "@mui/material/Button";
function ButtonUsage(props) {
  return;
}
function Counter() {
  const [count, setCount] = React.useState(0);
  function inc() {
    // setCount(count + 1);
    setCount((cv) => {
      return cv + 1;
    });
  }
  function dec() {
    setCount(count - 1);
  }
  return (
    <div className="mybox">
      <h1>Counter:{count}</h1>
      <Button variant="contained" onClick={inc}>
        Increment
      </Button>
      <Button variant="contained" onClick={dec}>
        Decrement
      </Button>
    </div>
  );
}

export default Counter;
