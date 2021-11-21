import React from "react";
import style from "./recipe.module.css";

const Recipes = ({ name, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{name}</h2>
      <ol key={ingredients.foodId}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default Recipes;
