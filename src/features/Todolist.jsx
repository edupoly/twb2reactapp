import React, { useEffect } from "react";

function Todolist() {
  useEffect(() => {
    document.getElementById("t1").focus();
  }, []);
  return (
    <div className="mybox">
      <h1>Todolist</h1>
      <input type="text" id="t1" />
    </div>
  );
}

export default Todolist;
