import React from "react";
import { useRecipeCategoryHooks } from "./recipeCategoryList.hooks";
import RecipeCategoryListView from "./components/recipeCategoryList.view";

export const RecipeCategoryListScreen = () => {
    const {
        categoryList,
        searchValue,
        onChangeSearchText,
        onItemPress
    } = useRecipeCategoryHooks()

    return <RecipeCategoryListView
        categoryList={categoryList}
        searchValue={searchValue}
        onChangeSearchText={onChangeSearchText}
        onItemPress={(item) => onItemPress(item)}
    />
}
