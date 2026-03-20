import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoAction } from "../store/actions";

function Todolist(props) {
  const [ntd, setNtd] = useState("");
  return (
    <div className="mybox">
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(ev) => {
          setNtd(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          props.addTodoFn(ntd);
        }}
      >
        Add Todo
      </button>
      <ul>
        {props.todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
function mapStateToProps(state) {
  return state.todolistR;
}
function mapDispatchToProps(dispatch) {
  return {
    addTodoFn: (ntd) => {
      dispatch(addTodoAction(ntd));
    },
    deleteTodoFn: () => {},
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
