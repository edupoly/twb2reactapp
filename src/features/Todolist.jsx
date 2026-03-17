import { useReducer, useState } from "react";
import { todolistReducer } from "./reducers";
function Todolist() {
  var [state, dispatch] = useReducer(todolistReducer, {
    todos: [
      { title: "goto goa", status: false, id: "asd12" },
      { title: "play cricket", status: false, id: "asd13" },
      { title: "buy home", status: false, id: "asd14" },
    ],
  });
  var [flag, setFlag] = useState("all");
  const [ntd, setntd] = useState("");
  function filterTodos(t) {
    if (flag === "all") {
      return true;
    }
    if (flag === "completed") {
      if (t.status == true) {
        return true;
      }
    }
    if (flag === "notcompleted") {
      if (t.status == false) {
        return true;
      }
    }
  }
  return (
    <div className="mybox">
      <h2>Todolist</h2>
      <input
        type="text"
        onChange={(e) => {
          setntd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADDTODO", payload: ntd });
        }}
      >
        Add Todo
      </button>
      <br />
      <input
        type="radio"
        name="flag"
        value="all"
        onChange={(e) => {
          setFlag(e.target.value);
        }}
      />
      :all
      <input
        type="radio"
        name="flag"
        value="completed"
        onChange={(e) => {
          setFlag(e.target.value);
        }}
      />
      :completed
      <input
        type="radio"
        name="flag"
        value="notcompleted"
        onChange={(e) => {
          setFlag(e.target.value);
        }}
      />
      :notcompleted
      <h3>flag:{flag}</h3>
      <ul>
        {state.todos.filter(filterTodos).map((todo) => {
          return (
            <li
              key={todo.id}
              className={todo.status ? "text-decoration-line-through" : ""}
            >
              {todo.title}
              <button
                onClick={() => {
                  dispatch({ type: "DONETODO", payload: todo.id });
                }}
              >
                Done
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "DELETETODO", payload: todo.id });
                }}
              >
                Del
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
