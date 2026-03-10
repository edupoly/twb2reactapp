import React from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data.products]);
      });
  }, []);
  return (
    <div className="border rounded border-success m-2">
      <ul className="p-0 bg-light d-flex flex-wrap justify-content-evenly">
        {products.map((prod) => {
          return <ProductCard product={prod}></ProductCard>;
        })}
      </ul>
    </div>
  );
}

export default Products;
