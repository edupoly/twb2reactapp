import React from "react";

function Another(props) {
  function handleRef4(e) {
    if (e.key === "Enter") {
      props.cref.current.focus();
    }
  }
  return (
    <div className="m-5 p-5 border border-4 border-success rounded">
      <h1>Another</h1>
      <input
        type="text"
        ref={props.aref}
        onKeyUp={(ev) => {
          handleRef4(ev);
        }}
      />
    </div>
  );
}

export default Another;
