import "./App.css";
import { useState, useEffect } from "react";
import Recipes from "./Recipes";

function App() {
  const APP_ID = "b731a8f6";
  const APP_KEYS = "cd7d5376f5ef38045c7eea4a45efdb98";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchFood = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form className="search-form" onSubmit={getSearchFood}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <input className="search-button" type="submit" />
      </form>

      <div className="recipes">
        {recipes.map((food) => (
          <Recipes
            key={food.recipe.image}
            name={food.recipe.label}
            calories={food.recipe.calories}
            image={food.recipe.image}
            ingredients={food.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
