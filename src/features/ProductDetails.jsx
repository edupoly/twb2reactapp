import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  var { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct({ ...data }));
  }, []);
  return (
    <div className="m-3 p-3 border border-danger rounded">
      <h1>{product?.title} ProductDetails</h1>
      <img src={product?.thumbnail} width="400px" alt="" />
    </div>
  );
}

export default ProductDetails;
