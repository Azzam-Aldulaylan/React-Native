import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Meal from "../models/meal";

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation();

  function selectMealItemHandler(){
    navigation.navigate('MealDetail', {
      mealId: id
    });
  }


  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => 
          (pressed ? styles.buttonpressed : null)}
          onPress={selectMealItemHandler}
      >
        <View style={styles.innerContaner}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m |</Text>
            <Text style={styles.detailItem}>
              {affordability.toUpperCase()} |
            </Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.os === "android" ? "hidden" : "visible",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  innerContaner: {
    borderRadius: 8,
  },
  imageStyle: {
    width: "100%",
    height: 200,
  },
  buttonpressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
