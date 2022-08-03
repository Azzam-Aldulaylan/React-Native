import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreens from "./screens/CategoriesScreens";

const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
  <>  
  <StatusBar style='dark' />
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="MealsCategories" component={CategoriesScreens}/>
    </Stack.Navigator>
  </NavigationContainer>
</> 
  );
}

const styles = StyleSheet.create({
  container: {},
});
