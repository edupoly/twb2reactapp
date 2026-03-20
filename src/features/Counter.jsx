import React from "react";
import { connect } from "react-redux";
import { decAction, incAction } from "../store/actions";

function Counter(props) {
  console.log(props);
  return (
    <div className="mybox">
      <h1>Counter:{props.count}</h1>
      <button
        onClick={() => {
          props.incFn();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          props.decFn();
        }}
      >
        Decrement
      </button>
    </div>
  );
}
function mapStateToProps(state) {
  return state.countR;
}
function mapDispatchToProps(dispatch) {
  return {
    incFn: () => {
      dispatch(incAction());
    },
    decFn: () => {
      dispatch(decAction());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
