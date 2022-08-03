import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CategoriesScreens from "./screens/CategoriesScreens";

export default function App() {
  return ( 
  <>  
  <SafeAreaView>
  <StatusBar style='light' />
  <CategoriesScreens />
  </SafeAreaView>
</> 
  );
}

const styles = StyleSheet.create({
  container: {},
});
