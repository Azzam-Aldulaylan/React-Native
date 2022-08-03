import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreens from "./screens/CategoriesScreens";
import MealsScreen from "./screens/MealsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
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
            component={CategoriesScreens}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsScreen" component={MealsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
