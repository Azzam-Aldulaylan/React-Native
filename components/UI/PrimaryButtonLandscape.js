import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

function PrimaryButtonLandscape({ children, onPress }) {
  return (
    <View style={styles.outterButtonContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerButtonContainer, styles.pressed]
            : styles.innerButtonContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButtonLandscape;

const styles = StyleSheet.create({
  outterButtonContainer: {
    borderRadius: 26,
    margin: 4,
    overflow: "hidden",
  },
  innerButtonContainer: {
    backgroundColor: Colors.primaryBurgundy,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: Colors.primaryW1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
