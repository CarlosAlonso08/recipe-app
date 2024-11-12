import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils";
import { recipe_url, recipeOptions } from "../api/api";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);
    try {
      const options = recipeOptions;
      const res = await fetch(recipe_url + searchQuery, options);
      const data = await res.json();
      setRecipes(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("salad");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value);
  };

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearch}>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={"24"} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="Search for a recipe..."
            />
          </label>
        </form>
        <h1 className="font-bold text-3cl md:text-5xl mt-4">
          Recommended recipes
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 tracking-tight">
          Popular choices
        </p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {!loading &&
            recipes.results.map((recipe, index) => {
              return (
                <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
              );
            })}
          {loading &&
            [...Array(9)].map((_, index) => {
              return (
                <div key={index} className="flex flex-col gap-4 w-full">
                  <div className="skeleton h-32 w-full"></div>
                  <div className="flex justify-between">
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                  </div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
