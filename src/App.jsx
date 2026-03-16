import { Outlet, Link, NavLink } from "react-router-dom";
import Navbar from "./component/Navbar";
function App() {
  return (
    <div>
      <div className="m-1 p-2 d-flex gap-2 justify-content-between align-items-center">
        <Navbar></Navbar>
        <div className="d-flex gap-2">
          <NavLink
            to="/counter"
            className={({ isActive }) => {
              return isActive
                ? "bg-success text-light text-decoration-none"
                : "";
            }}
          >
            Counter
          </NavLink>
          <br />
          <NavLink
            to="/todolist"
            className={({ isActive }) => {
              return isActive
                ? "bg-success text-light text-decoration-none"
                : "";
            }}
          >
            Todolist
          </NavLink>
          <br />
          <NavLink
            to="/products"
            className={({ isActive }) => {
              return isActive
                ? "bg-success text-light text-decoration-none"
                : "";
            }}
          >
            Products
          </NavLink>
          <br />
          <NavLink
            to="/recipes"
            className={({ isActive }) => {
              return isActive
                ? "bg-success text-light text-decoration-none"
                : "";
            }}
          >
            Recipes
          </NavLink>
          <br />
          <NavLink
            to="/posts"
            className={({ isActive }) => {
              return isActive
                ? "bg-success text-light text-decoration-none"
                : "";
            }}
          >
            Posts
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
