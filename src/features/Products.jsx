import React from "react";
import { Link } from "react-router-dom";

function Products() {
  const [prods, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data.products]);
      });
  }, []);

  return (
    <div className="mybox">
      {prods?.map((p) => {
        return (
          <li>
            <Link to={`/productDetails/${p.id}`}>{p.title}</Link>
          </li>
        );
      })}
    </div>
  );
}

export default Products;
