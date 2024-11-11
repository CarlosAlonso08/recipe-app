import { Heart, Soup, HeartPulse, Timer } from "lucide-react";
import { Link } from 'react-router-dom';
import React from "react";

const RecipeCard = ({recipe}) => {
  return (
    <>
        <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
            <Link to={`/details/${recipe.id}`} key={recipe.id} state={{ recipe }} className="relative h-32" >
              <img
                src={recipe.thumbnail_url}
                alt="recipe"
                className="rounded-md w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
                <Soup size={"16"} /> {recipe.yields}
              </div>
              <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
                <Heart
                  size={"20"}
                  className="hover:fill-red-500 hover:text-red-500"
                />
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
              <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                <HeartPulse size={"16"}/>
                <span className="text-sm tracking-tighter font-semibold">Gluten free</span>
              </div>
              <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
                <HeartPulse size={"16"}/>
                <span className="text-sm tracking-tighter font-semibold">Heart-healthy</span>
              </div>
            </div>
        </div>
    </>
  )
}

export default RecipeCard
