import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetTableDetailsByIdQuery,
  useUpdateTableDetailsMutation,
  useLazyGetTableDetailsByIdQuery,
} from "../../services/tableApi";

function TableOrders() {
  var { tableId } = useParams();
  var { data: tableDetails, isLoading: isTableDetailsLoading } =
    useGetTableDetailsByIdQuery(tableId);

  var [getLatestTableOrderDetailsFn] = useLazyGetTableDetailsByIdQuery(tableId);

  //   var [deleteTableOrderFn] = useDeleteTableOrderMutation();
  var [updateTableDetailsFn] = useUpdateTableDetailsMutation();
  function handleDeleteOrder(i) {
    var temp = JSON.parse(JSON.stringify(tableDetails));
    temp.order.splice(i, 1);
    updateTableDetailsFn(temp).then(() => {
      alert("Order Deleted");
      getLatestTableOrderDetailsFn(tableId);
      // deleteTableOrderFn({)
    });
  }
  return (
    <div className="w-25 mx-auto mt-5 border">
      <h1>TableOrders</h1>
      {isTableDetailsLoading && <b>...Loading</b>}
      {!isTableDetailsLoading && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
            {tableDetails?.order?.map((order, i) => {
              return (
                <tr key={i}>
                  <td scope="col">{order.itemName}</td>
                  <td scope="col">{order.itemCost}</td>
                  <td scope="col">
                    <button
                      onClick={() => {
                        handleDeleteOrder(i);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableOrders;
