import React from "react";
import { useRecipeDetailsHooks } from "./recipeDetails.hooks";
import RecipeDetailsView from "./components/recipeDetails.view";

export const RecipeDetailsScreen = () => {
    const { params } = useRecipeDetailsHooks()

    return <RecipeDetailsView params={params} />
}
