
export const recipeOptions = {
    method: "GET",
    headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
        "x-rapidapi-host": "tasty.p.rapidapi.com",
    }

}
export const recipe_url = "https://tasty.p.rapidapi.com/recipes/list?from=0&q=";