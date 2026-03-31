import { useFormik } from "formik";
import React from "react";
import { useAddItemMutation } from "../../services/itemApi";

function AddItem() {
  var [addItemFn] = useAddItemMutation();
  const itemForm = useFormik({
    initialValues: {
      itemName: "",
      itemCost: 0,
      itemImage: "",
    },
    onSubmit: (values) => {
      addItemFn(values).then(() => {
        alert("Item add Ipoindi");
      });
    },
  });
  return (
    <div>
      <h1>AddItem</h1>
      <form onSubmit={itemForm.handleSubmit}>
        <input
          type="text"
          {...itemForm.getFieldProps("itemName")}
          placeholder="Enter Item Name"
        />
        <br />
        <input
          type="text"
          {...itemForm.getFieldProps("itemCost")}
          placeholder="Enter Item Cost"
        />
        <br />
        <input
          type="text"
          {...itemForm.getFieldProps("itemImage")}
          placeholder="Enter Item Image"
        />
        <br />
        <button type="submit"> Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
