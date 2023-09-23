import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RecipeCategoryListScreen } from "./src/RecipeCategoryList/recipeCategoryList.screen"
import { RecipeListScreen } from "./src/RecipeList/recipeList.screen"
import { RecipeDetailsScreen } from "./src/RecipeDetails/recipeDetails.screen"

export type PrimaryParamList = {
  RecipeCategory: undefined
  RecipeList: undefined
  RecipeDetails: undefined
}

const Stack = createNativeStackNavigator<PrimaryParamList>();

const PrimaryNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"RecipeCategory"} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RecipeCategory" component={RecipeCategoryListScreen} />
      <Stack.Screen name="RecipeList" component={RecipeListScreen} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>

      <PrimaryNavigator />
    </NavigationContainer>
  )
}

export default App;