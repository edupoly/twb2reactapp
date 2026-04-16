import React, { useEffect, useState } from "react";
import { useGetAllItemsQuery } from "../../services/itemApi";
import { useLocation, useParams } from "react-router-dom";
import {
  useGetTableDetailsByIdQuery,
  useLazyGetTableDetailsByIdQuery,
  useUpdateTableDetailsMutation,
} from "../../services/tableApi";

function AllItems() {
  var { isLoading: isItemsLoading, data: itemsData } = useGetAllItemsQuery();
  var [updateTableDetailsFn] = useUpdateTableDetailsMutation();
  var [tableDetails, setTableDetails] = useState();

  var { tableId } = useParams();
  var { data: tableDetailsData } = useGetTableDetailsByIdQuery(tableId);
  var [getLatestTableOrderDetailsFn] = useLazyGetTableDetailsByIdQuery(tableId);

  // useEffect(() => {
  //   setTableDetails(tableDetailsData);
  // }, [tableDetailsData]);

  function handleInsertOrder(item) {
    var temp = JSON.parse(JSON.stringify(tableDetailsData));
    temp.order.push(item);
    setTableDetails({ ...temp });
    updateTableDetailsFn(temp).then(() => {
      alert("Order Inserted");
      getLatestTableOrderDetailsFn(tableId);
    });
  }
  return (
    <div>
      <h1>AllItems</h1>
      {isItemsLoading && <b>...Loading</b>}
      {!isItemsLoading && (
        <ul className="d-flex flex-wrap gap-3">
          {itemsData.map((item, i) => {
            return (
              <div class="card" style={{ width: "10rem" }} key={i}>
                <img src={item.itemImage} class="card-img-top" alt="..." />
                <div class="card-body">
                  <b class="card-title">{item.itemName}</b>
                  <p class="card-text">{item.itemCost}</p>
                  <button
                    onClick={() => {
                      handleInsertOrder(item);
                    }}
                    class="btn btn-primary"
                  >
                    Insert Order
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default AllItems;
