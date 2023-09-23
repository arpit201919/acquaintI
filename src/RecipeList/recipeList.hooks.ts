import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";

interface recipeListHooks {
    params: any;
    recipeList: any[];
    searchValue: string;
    onChangeSearchText: (text: string) => void;
    onItemPress: (item: any) => void
}

export const useRecipeListHooks = (): recipeListHooks => {
    const [recipeList, setRecipeList] = useState([])
    const [tempList, setTempList] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const isFocused = useIsFocused()
    const navigation = useNavigation<any>();
    const params = useRoute().params

    useEffect(() => {
        if (isFocused) {
            callGetRecipeListApi()
        }
    }, [isFocused])

    const callGetRecipeListApi = async () => {
        const response = await axiosInstance.get('/filter.php', {
            params: {
                c: params?.item?.strCategory
            }
        })
        setRecipeList(response?.data.meals)
        setTempList(response?.data?.meals)
    }

    const onChangeSearchText = (text: string) => {
        if (text) {
            const newData = tempList.filter(
                (item: any) => {
                    const itemData = item.strMeal
                        ? item.strMeal.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setRecipeList(newData);
            setSearchValue(text)
        } else {
            setRecipeList(tempList);
            setSearchValue(text)
        }
    }

    const onItemPress = (item: any) => {
        navigation.navigate("RecipeDetails", { "item": item })
    }

    return {
        params,
        recipeList,
        searchValue,
        onChangeSearchText,
        onItemPress
    }
}