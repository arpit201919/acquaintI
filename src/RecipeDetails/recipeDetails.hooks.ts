import { useIsFocused, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";

interface recipeDetailsHooks {
    params: any;

}

export const useRecipeDetailsHooks = (): recipeDetailsHooks => {
    const isFocused = useIsFocused()
    const params = useRoute().params

    useEffect(() => {
        if (isFocused) {
            callGetRecipeListApi()
        }
    }, [isFocused])

    const callGetRecipeListApi = async () => {
        console.log("parammmmmm======>>>>>>", params);

        // const response = await axiosInstance.get('/filter.php', {
        //     params: {
        //         c: params?.item?.idMeal
        //     }
        // })

    }

    return {
        params
    }
}