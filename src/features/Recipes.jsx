import React from "react";
import { Link, Outlet } from "react-router-dom";

function Recipes() {
  const [recipes, setrecipes] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setrecipes([...data.recipes]);
      });
  }, []);

  return (
    <div className="mybox d-flex">
      <ul className="list-unstyled">
        {recipes?.map((p) => {
          return (
            <li>
              <Link to={`/recipes/${p.id}`}>{p.name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default Recipes;
