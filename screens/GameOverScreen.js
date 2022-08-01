import { Text, View, StyleSheet, Image } from "react-native";
import Title from "../components/UI/Title";

import Colors from "../constants/Colors";
import Card from "../components/UI/Card";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen() {
  return (
    <View style={styles.rootContaner}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Card>
      <Text style={styles.summaryText}>
        Round reached was <Text style={styles.highlight}>x</Text> to guess
        number <Text style={styles.highlight}>y</Text>.
      </Text>
      <PrimaryButton>Start a New Game!</PrimaryButton>
      </Card>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContaner: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primaryW1,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    color: Colors.primaryW1,
    fontSize:24,
    textAlign: "center",
    marginBottom:24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primaryW1,
  },
});
