import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./features/Counter.jsx";
import Todolist from "./features/Todolist.jsx";
import Products from "./features/Products.jsx";
import ProductDetails from "./features/ProductDetails.jsx";
import Recipes from "./features/Recipes.jsx";
import RecipeDetails from "./features/RecipeDetails.jsx";
import Posts from "./features/Posts.jsx";
import PostDetails from "./features/PostDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/counter",
        element: <Counter></Counter>,
      },
      {
        path: "/todolist",
        element: <Todolist></Todolist>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
        children: [
          {
            path: "/recipes/:id",
            element: <RecipeDetails></RecipeDetails>,
          },
        ],
      },
      {
        path: "/posts",
        element: <Posts></Posts>,
      },
      {
        path: "/postDetails",
        element: <PostDetails></PostDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>,
);
