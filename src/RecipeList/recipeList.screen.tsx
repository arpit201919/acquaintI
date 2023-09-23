import React from "react";
import { useRecipeListHooks } from "./recipeList.hooks";
import RecipeListView from "./components/recipeList.view";

export const RecipeListScreen = () => {
    const {
        params,
        recipeList,
        searchValue,
        onChangeSearchText,
        onItemPress
    } = useRecipeListHooks()

    return <RecipeListView
        params={params}
        recipeList={recipeList}
        searchValue={searchValue}
        onChangeSearchText={onChangeSearchText}
        onItemPress={(item) => onItemPress(item)}
    />
}
