import React from "react";
import { useLocation } from "react-router-dom";

const RecipeDetails = () => {
  const location = useLocation();
  const { recipe, bg } = location.state || {};
  return (
    <>
      <div className="flex w-full flex-col gap-4 p-10 items-center">
        <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative items-center`}>
          <div className="flex items-center gap-4 flex-col">
            <div className="flex flex-col gap-4 p-5">
              <div className="h-full w-full">
                <h1 className="font-bold tracking-wide">{recipe.name}</h1>
              </div>
            </div>
            <div className="skeleton h-80 w-full shrink-0 rounded-full">
              <img
                src={recipe.thumbnail_url}
                alt="recipe"
                className="rounded-md w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="h-25 w-full flex flex-col rounded-md p-5">
            <div className="h-full w-full">
              <p className="font-bold tracking-wide">{recipe.description}</p>
            </div>
          </div>
          <div className="h-25 w-full flex flex-col rounded-md p-5 items">
            <div className="h-full w-full">
              <p className="font-bold tracking-wide">Step by step</p>
              {recipe.instructions.map((steps) => {
                return (
                  <p className="font-bold tracking-wide" key={steps.position}>
                    {steps.position}.- {steps.display_text}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="h-96 w-96 flex flex-col rounded-md p-10">
            <video
              src={`${recipe.original_video_url}`}
              style={{ width: "100%", height: "100%" }}
              controls={true}
              muted
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
