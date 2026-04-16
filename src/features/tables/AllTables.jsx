import React from "react";
import { useGetAllTablesQuery } from "../../services/tableApi";
import { Link } from "react-router-dom";

function AllTables() {
  var { isLoading: isTablesLoading, data: tableData } = useGetAllTablesQuery();
  return (
    <div className="w-75 mx-auto mt-5">
      <h1>AllTables</h1>
      {isTablesLoading && <b>...Loading</b>}
      {!isTablesLoading && (
        <ul className="d-flex flex-wrap gap-3">
          {tableData?.map((table) => {
            return (
              <Link to={`/table/${table.id}`} state={table}>
                <li
                  class="card text-bg-light mb-3"
                  style={{ "max-width": "200px" }}
                >
                  <div class="card-header">{table.tableName}</div>
                  <div class="card-body">
                    <h5 class="card-title">Capacity:{table.capacity}</h5>
                    <h5 class="card-title">
                      {table?.orders?.length > 0 ? "Occupied" : "FREE"}
                    </h5>
                    <p class="card-text">{table.reservationStatus}</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default AllTables;
