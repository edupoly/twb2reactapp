import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  var { id } = useParams();
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe({ ...data }));
  }, [id]);
  return (
    <div className="m-3 p-3 border border-danger rounded">
      <h1>{recipe?.name} ProductDetails</h1>
      <img src={recipe?.image} width="400px" alt="" />
    </div>
  );
}

export default RecipeDetails;
