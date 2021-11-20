import React from "react";

const Recipes = ({ name, calories, image }) => {
  return (
    <div className="food_recipe">
      <h2>{name}</h2>
      <p>Calories: {calories}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default Recipes;
