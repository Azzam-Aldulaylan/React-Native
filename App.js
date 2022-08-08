import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreens from "./screens/CategoriesScreens";
import MealsScreen from "./screens/MealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
 return <DrawerNavigator>
  <DrawerNavigator.Screen/>
 </DrawerNavigator>;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#b5cef5" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "skyblue" },
          }}
        >
          <Stack.Screen
            name="Meals Categories"
            component={DrawerNavigator}
            options={{
              //title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsScreen" component={MealsScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
