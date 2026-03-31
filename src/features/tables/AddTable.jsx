import { useFormik } from "formik";
import React from "react";
import { useAddTableMutation } from "../../services/tableApi";

function AddTable() {
  var [addTableFn] = useAddTableMutation();
  const tableForm = useFormik({
    initialValues: {
      tableName: "",
      capacity: 0,
      reservationStatus: false,
      order: [],
    },
    onSubmit: (values) => {
      addTableFn(values).then(() => {
        alert("add ipoindi babu");
      });
    },
  });
  return (
    <div>
      <h1>AddTable</h1>
      <form onSubmit={tableForm.handleSubmit}>
        <input
          type="text"
          {...tableForm.getFieldProps("tableName")}
          placeholder="Enter Table Name"
        />
        <br />
        <input
          type="text"
          {...tableForm.getFieldProps("capacity")}
          placeholder="Enter Capacity"
        />
        <br />
        <button type="submit">Add Table</button>
      </form>
    </div>
  );
}

export default AddTable;
