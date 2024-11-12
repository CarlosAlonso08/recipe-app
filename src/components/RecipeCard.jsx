import { Heart, Soup, Timer, Hash } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect} from "react";

const RecipeCard = ({ recipe, bg, badge }) => {
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some(fav => fav.id === recipe.id);
    setFavorite(isFavorite);
  }, [recipe.id]);

  const addToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some(fav => fav.id === recipe.id);
    if (!isFavorite) {
      favorites.push(recipe);
      setFavorite(true);
    } else {
      favorites = favorites.filter((fav) => fav.id !== recipe.id);
      setFavorite(false);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  return (
    <>
      <div
        className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}
      >
        <Link
          to={`/details/${recipe.id}`}
          key={recipe.id}
          state={{ recipe, bg }}
          className="relative h-32"
        >
          <div className="skeleton absolute inset-0"/>
          <img
            src={recipe.thumbnail_url}
            alt="recipe"
            className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500"
            onLoad={(e) => {
              e.currentTarget.style.opacity = 1;
              e.currentTarget.previousElementSibling.style.display = "none";
            }}
          />
          <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
            <Soup size={"16"} /> {recipe.yields}
          </div>
          <div
            className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              addToFavorites();
            }}
          >
            {!favorite && (
              <Heart
                size={"20"}
                className="hover:fill-red-500 hover:text-red-500"
              />
            )}
            {favorite && (
              <Heart size={"20"} className="fill-red-500 text-red-500" />
            )}
          </div>
          <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
            <Timer size={"16"} /> {recipe.total_time_minutes} min
          </div>
        </Link>

        <div className="flex mt-1">
          <p className="font-bold tracking-wide">{recipe.name}</p>
        </div>
        <p className="my-2">Country: {recipe.country}</p>

        <div className="flex mt-1 overflow-auto h-48">
          <p className="font-bold tracking-wide">{recipe.description}</p>
        </div>

        <div className="flex gap-2 mt-auto">
          {recipe.tags.slice(0, 3).map((tag) => {
            return (
              <div
                className={`flex gap-1 ${badge} items-center p-1 rounded-md`}
                key={tag.id}
              >
                <Hash size={"16"} />
                <span className="text-sm tracking-tighter font-semibold">
                  {tag.display_name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
