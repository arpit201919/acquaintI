import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    Image,
    Dimensions,
    TouchableOpacity
} from "react-native";

interface recipeListProps {
    params: any;
    recipeList: any[];
    searchValue: string;
    onChangeSearchText: (text: string) => void;
    onItemPress: (item: any) => void
}

const screenWidth = Dimensions.get("screen").width

const RecipeListView = (props: recipeListProps) => {
    const { params, recipeList, searchValue, onChangeSearchText, onItemPress } = props;


    const renderItem = (({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.listContainer}
                onPress={() => onItemPress(item)}
            >
                <Image
                    source={{ uri: item?.strMealThumb }}
                    style={styles.imageStyle}
                    resizeMode={"contain"}
                />
                <View style={styles.nameCont}>
                    <Text style={styles.textStyle}>{item.strMeal}</Text>
                </View>
                <Image
                    source={require("../../../assets/arrowRight.png")}
                    style={styles.arrow}
                />
            </TouchableOpacity>
        )
    })


    return (
        <View style={styles.container}>
            <View style={styles.headerCont}>
                <Text style={styles.headerText}>{params.item.strCategory}</Text>
            </View>
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                placeholderTextColor={"black"}
                value={searchValue}
                onChangeText={(text: string) => onChangeSearchText(text)}
            />
            <View style={styles.lineStyle} />
            <FlatList
                data={recipeList}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle: {
        borderWidth: 1,
        color: "black",
        paddingHorizontal: 15,
        fontSize: 18,
        marginHorizontal: 30,
        borderRadius: 30,
        marginVertical: 20
    },
    lineStyle: {
        borderWidth: 0.5
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: "center",
        marginHorizontal: 20,
        borderBottomWidth: 1,
        paddingVertical: 20
    },
    imageStyle: {
        height: 70,
        width: 80
    },
    nameCont: {
        marginHorizontal: 20
    },
    arrow: {
        height: 40,
        width: 40
    },
    textStyle: {
        fontSize: 16,
        color: "black",
        fontWeight: "800",
        width: screenWidth * 0.5
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
    }
})

export default RecipeListView