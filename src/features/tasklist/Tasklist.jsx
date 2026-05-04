import React from "react";
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetAllTodosQuery,
  useLazyGetAllTodosQuery,
  useUpdateTodoMutation,
} from "../../services/todosApi";

function Tasklist() {
  var { isLoading, data } = useGetAllTodosQuery();
  var [getLatestTodoFn] = useLazyGetAllTodosQuery();
  var [deleteTodoFn] = useDeleteTodoMutation();
  var [updateTodoFn] = useUpdateTodoMutation();
  var [addTodoFn] = useAddTodoMutation();
  var [ntd, setNtd] = React.useState([]);
  var [selectedTodo, setSelectedTodo] = React.useState(null);
  function addTodo() {
    addTodoFn(ntd)
      .then(() => {
        console.log("add ipoindi");
      })
      .then(() => {
        getLatestTodoFn();
      });
  }
  function deleteTodo(id) {
    deleteTodoFn(id).then(() => {
      getLatestTodoFn();
    });
  }
  function updateTodo(todo) {
    updateTodoFn(todo).then(() => {
      getLatestTodoFn();
    });
  }
  return (
    <div>
      {isLoading && <b>Loading...</b>}
      <input
        type="text"
        onChange={(eve) => {
          setNtd(eve.target.value);
        }}
        value={ntd}
      />
      {!selectedTodo && (
        <button
          onClick={() => {
            addTodo();
          }}
        >
          Add Task
        </button>
      )}
      {selectedTodo && (
        <button
          onClick={() => {
            updateTodo({ ...selectedTodo, title: ntd });
            setNtd("");
            setSelectedTodo(null);
          }}
        >
          Update Todo
        </button>
      )}
      {!isLoading &&
        data?.map((task) => {
          return (
            <li
              className={
                task.status === "completed"
                  ? "text-decoration-line-through"
                  : ""
              }
            >
              {task.title}
              <i
                class="bi bi-pencil-square p-2"
                onClick={() => {
                  setNtd(task.title);
                  setSelectedTodo({ ...task });
                }}
              ></i>
              <i
                class="bi bi-trash-fill text-danger p-2"
                onClick={() => {
                  deleteTodo(task.id);
                }}
              ></i>
              {task.status === "completed" && (
                <i
                  class="bi bi-arrow-counterclockwise"
                  onClick={() => {
                    updateTodo({ ...task, status: "notcompleted" });
                  }}
                ></i>
              )}
              {task.status === "notcompleted" && (
                <i
                  class="bi bi-check-circle-fill"
                  onClick={() => {
                    updateTodo({ ...task, status: "completed" });
                  }}
                ></i>
              )}
              <i class="bi bi-share-fill p-2"></i>
            </li>
          );
        })}
    </div>
  );
}

export default Tasklist;
