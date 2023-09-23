import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface recipeDetailsProps {
    params: any
}

const RecipeDetailsView = (props: recipeDetailsProps) => {
    const { params } = props;

    return (
        <View style={styles.container}>
            <View style={styles.headerCont}>
                <Text style={styles.headerText}>{params.item.strMeal}</Text>
            </View>

            <View style={styles.viewStyle} >
                <Text style={styles.headerText}>Id: {params.item.idMeal}</Text>
                <Text style={styles.headerText}>Meal: {params.item.strMeal}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerCont: {
        height: 60,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        paddingHorizontal: 30
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    viewStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20
    }
})

export default RecipeDetailsView