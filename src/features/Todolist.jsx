import React from "react";

function Todolist() {
  const [todos, setTodos] = React.useState([
    "goto goa",
    "pay bills",
    "clean car",
  ]);

  return (
    <div className="mybox border-info">
      <input type="text" />
      <button>Add Todo</button>
      <ul>
        {todos.map((t) => {
          return <li>{t}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
