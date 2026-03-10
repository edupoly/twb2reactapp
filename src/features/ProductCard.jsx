import React from "react";

function ProductCard({ product }) {
  return (
    <div className="p-2 m-2 border" style={{ width: "10em" }}>
      <b>{product.title}</b>
      <img src={product.thumbnail} style={{ width: "100%" }} alt="" />
    </div>
  );
}

export default ProductCard;
