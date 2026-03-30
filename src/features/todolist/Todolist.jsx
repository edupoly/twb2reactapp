import React, { useRef, useState } from "react";
import {
  useAddNewTodoMutation,
  useDeleteTodoMutation,
  useGetAllTodosQuery,
  useLazyGetAllTodosQuery,
  useUpdateTodoMutation,
} from "../../services/todosApi";

function Todolist() {
  const tref = useRef();
  const { isLoading, data } = useGetAllTodosQuery();
  const [ntd, setNtd] = useState("");
  var [addNewTodoFn] = useAddNewTodoMutation();
  const [getLatestTodosFn] = useLazyGetAllTodosQuery();
  const [deleteTodoFn] = useDeleteTodoMutation();
  var [updateTodoFn] = useUpdateTodoMutation();
  const [selectedTodo, setSelectedTodo] = useState(null);
  function handleAddNewTodo() {
    addNewTodoFn(ntd).then(() => {
      getLatestTodosFn();
    });
  }
  function handleDeleteTodo(id) {
    deleteTodoFn(id).then(() => {
      getLatestTodosFn();
    });
  }
  function doneTodo(todo) {
    todo = { ...todo, status: "completed" };
    updateTodoFn(todo).then(() => {
      getLatestTodosFn();
    });
  }
  function undoTodo(todo) {
    todo = { ...todo, status: "not completed" };
    updateTodoFn(todo).then(() => {
      getLatestTodosFn();
    });
  }
  function editTodo(todo) {
    setSelectedTodo({ ...todo });
    tref.current.focus();
    tref.current.value = todo.title;
  }
  function updateTodoTitle() {
    const todo = { ...selectedTodo, title: ntd };
    updateTodoFn(todo).then(() => {
      getLatestTodosFn();
      tref.current.value = "";
      setSelectedTodo(null);
      setNtd("");
    });
  }
  return (
    <div>
      <h1>Todolist</h1>
      {isLoading && <b>...Loading</b>}
      <input
        type="text"
        onChange={(ev) => {
          setNtd(ev.target.value);
        }}
        ref={tref}
      />
      {!selectedTodo && (
        <button
          onClick={() => {
            handleAddNewTodo();
          }}
        >
          Add Todo
        </button>
      )}
      {selectedTodo && (
        <button
          onClick={() => {
            updateTodoTitle();
          }}
        >
          Update Todo
        </button>
      )}
      <br />
      <br />
      {!isLoading && (
        <ul>
          {data?.map((todo) => {
            return (
              <li
                className={
                  todo.status === "completed"
                    ? "text-decoration-line-through"
                    : ""
                }
              >
                {todo.title}
                <button
                  onClick={() => {
                    editTodo(todo);
                  }}
                >
                  Edit
                </button>
                {todo.status === "completed" && (
                  <button
                    onClick={() => {
                      undoTodo(todo);
                    }}
                  >
                    Undo
                  </button>
                )}
                {todo.status === "not completed" && (
                  <button
                    onClick={() => {
                      doneTodo(todo);
                    }}
                  >
                    Done
                  </button>
                )}

                <button
                  onClick={() => {
                    handleDeleteTodo(todo.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Todolist;
