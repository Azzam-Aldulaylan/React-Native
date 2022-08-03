import { View, StyleSheet, Text } from "react-native";
import Meal from "../models/meal";

function MealItem({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({});
