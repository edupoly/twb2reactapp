import React from "react";
import { Link, useLocation } from "react-router-dom";

function TableDetails() {
  var x = useLocation();
  console.log(x);
  return (
    <div>
      <h1>TableDetails</h1>
      <Link to="/allItems" state={x.state}>
        Add Order
      </Link>
    </div>
  );
}

export default TableDetails;
