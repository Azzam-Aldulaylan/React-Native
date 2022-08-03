import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
import Category from "../models/category";

function CategoryGridTile({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttonstyle,
          pressed ? styles.buttonpressed : null,
        ]}
      >
        <View style={[styles.innerContaner,  {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    overflow: Platform.os === "android" ? "hidden" : "visible",
  },
  buttonstyle: {
    flex: 1,
  },
  buttonpressed: {
    opacity: 0.5,
  },
  innerContaner: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
