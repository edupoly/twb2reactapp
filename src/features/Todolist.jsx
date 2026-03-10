import React from "react";

function Todolist() {
  const [todos, setTodos] = React.useState([]);
  const [ntd, setNtd] = React.useState("");
  function addTodo() {
    setTodos([...todos, ntd]);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        onChange={(e) => {
          setNtd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
