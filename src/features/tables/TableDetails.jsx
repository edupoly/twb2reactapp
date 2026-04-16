import React from "react";
import { Link, useLocation } from "react-router-dom";
import AllItems from "../Items/AllItems";
import TableOrders from "./TableOrders";

function TableDetails() {
  var {
    state: { tableName },
  } = useLocation();

  return (
    <>
      <h1>{tableName.toUpperCase()}: Details</h1>
      <div className="d-flex flex-wrap">
        <AllItems></AllItems>
        <TableOrders></TableOrders>
      </div>
    </>
  );
}

export default TableDetails;
