import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTable from "./features/tables/AddTable.jsx";
import AllTables from "./features/tables/AllTables.jsx";
import TableDetails from "./features/tables/TableDetails.jsx";
import AddItem from "./features/Items/AddItem.jsx";
import AllItems from "./features/Items/AllItems.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/addtable",
        element: <AddTable></AddTable>,
      },
      {
        path: "/addItem",
        element: <AddItem></AddItem>,
      },
      {
        path: "/allItems",
        element: <AllItems></AllItems>,
      },
      {
        path: "/alltables",
        element: <AllTables></AllTables>,
      },
      {
        path: "/table/:tableId",
        element: <TableDetails></TableDetails>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
