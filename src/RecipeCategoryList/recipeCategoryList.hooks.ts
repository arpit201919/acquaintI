import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import axiosInstance from "../../utils/axios";

interface recipeCategoryHooks {
    categoryList: any[];
    searchValue: string;
    onChangeSearchText: (text: string) => void;
    onItemPress: (item: any) => void
}

export const useRecipeCategoryHooks = (): recipeCategoryHooks => {
    const [categoryList, setCategoryList] = useState([])
    const [tempList, setTempList] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const isFocused = useIsFocused()
    const navigation = useNavigation<any>()

    useEffect(() => {
        if (isFocused) {
            callGetCategoryApi()
        }
    }, [isFocused])

    const callGetCategoryApi = async () => {
        const response = await axiosInstance.get('/categories.php')
        setCategoryList(response?.data?.categories)
        setTempList(response?.data?.categories)
    }

    const onChangeSearchText = (text: string) => {
        if (text) {
            const newData = tempList.filter(
                (item: any) => {
                    const itemData = item.strCategory
                        ? item.strCategory.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setCategoryList(newData);
            setSearchValue(text)
        } else {
            setCategoryList(tempList);
            setSearchValue(text)
        }
    }

    const onItemPress = (item: any) => {
        console.log("navigatye=====", { "item": item });
        navigation.navigate("RecipeList", { "item": item })
    }

    return {
        categoryList,
        searchValue,
        onChangeSearchText,
        onItemPress
    }
}

