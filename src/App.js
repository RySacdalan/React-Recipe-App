import "./App.css";
import { useState, useEffect } from "react";
import Recipes from "./Recipes";

function App() {
  const APP_ID = "b731a8f6";
  const APP_KEYS = "cd7d5376f5ef38045c7eea4a45efdb98";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEYS}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <input className="search-button" type="submit" />
      </form>
      {recipes.map((food) => (
        <Recipes
          key={food.recipe.label}
          name={food.recipe.label}
          calories={food.recipe.calories}
          image={food.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
