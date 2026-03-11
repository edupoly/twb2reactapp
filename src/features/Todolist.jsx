import React from "react";

function Todolist() {
  const [todos, setTodos] = React.useState([
    "goto goa",
    "watch movie",
    "play cricket",
  ]);
  const [ntd, setNtd] = React.useState("");
  function addTodo() {
    // setTodos([...todos, ntd]);
    setTodos((ctodos) => {
      ctodos.push(ntd);
      return [...ctodos];
    });
  }
  function handleDelete(ind) {
    setTodos((ctodos) => {
      ctodos.splice(ind, 1);
      return [...ctodos];
    });
  }
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
          return (
            <li className="border border-2 border-success rounded m-2 p-2">
              {todo}
              <button
                onClick={() => {
                  handleDelete(i);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
