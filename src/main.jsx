import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviesMaster from "./features/movies/MoviesMaster.jsx";
import Tasklist from "./features/tasklist/Tasklist.jsx";
import Login from "./features/user/Login.jsx";
import Photos from "./features/photos/Photos.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/movies",
        element: <MoviesMaster></MoviesMaster>,
      },
      {
        path: "/photos",
        element: <Photos></Photos>,
      },
      {
        path: "/tasks",
        element: <Tasklist></Tasklist>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>,
);
