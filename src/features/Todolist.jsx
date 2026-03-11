import React, { useCallback } from "react";
import Todo from "./Todo";

function Todolist() {
  const [todos, setTodos] = React.useState([
    "goto goa",
    "watch movie",
    "play cricket",
    "kill bill pandey",
    "maddali sivareddy",
  ]);
  const [ntd, setNtd] = React.useState("");
  function addTodo() {
    // setTodos([...todos, ntd]);
    setTodos((ctodos) => {
      ctodos.push(ntd);
      return [...ctodos];
    });
  }
  const handleDelete = useCallback(function (ind) {
    setTodos((ctodos) => {
      ctodos.splice(ind, 1);
      return [...ctodos];
    });
  }, []);
  return (
    <div className="p-2 m-2 border border-2 rounded">
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
        {todos.map((todo, i) => {
          return <Todo todo={todo} i={i} delTodo={handleDelete}></Todo>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
