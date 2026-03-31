import React, { useEffect, useState } from "react";
import { useGetAllItemsQuery } from "../../services/itemApi";
import { useLocation } from "react-router-dom";

function AllItems() {
  var { isLoading: isItemsLoading, data: itemsData } = useGetAllItemsQuery();
  var [tableDetails, setTableDetails] = useState();
  var y = useLocation();
  useEffect(() => {
    setTableDetails({ ...y.state });
  }, [y.state]);
  function handleInsertOrder(item) {
    var temp = { ...tableDetails };
    temp.order.push(item);
    setTableDetails({ ...temp });
  }
  return (
    <div>
      <h1>AllItems</h1>
      {isItemsLoading && <b>...Loading</b>}
      {!isItemsLoading && (
        <ul className="d-flex flex-wrap gap-3">
          {itemsData.map((item) => {
            return (
              <div class="card" style={{ width: "10rem" }}>
                <img src={item.itemImage} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.itemName}</h5>
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
