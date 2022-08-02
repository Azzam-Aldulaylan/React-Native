import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

import Title from "../components/UI/Title";
import Colors from "../constants/Colors";
import Card from "../components/UI/Card";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
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
        Round reached was <Text style={styles.highlight}>{roundsNumber}</Text> to guess
        number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start a New Game!</PrimaryButton>
      </Card>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rootContaner: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 300 ? 12: 24,
    height: deviceHeight < 300 ? 12: 24,
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
