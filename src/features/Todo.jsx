import React, { useEffect } from "react";

function Todo(props) {
  useEffect(() => {
    return () => {
      console.log(props.todo + " Todo Deleted");
    };
  }, []);
  useEffect(() => {
    console.log(props.todo + " rerendered");
  });
  return (
    <div>
      <li className="border border-2 border-success rounded m-2 p-2">
        {props.todo}
        <button
          onClick={() => {
            props.delTodo(props.i);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default React.memo(Todo);
