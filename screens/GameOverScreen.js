import { Text, View, StyleSheet, Image, useWindowDimensions, ScrollView } from "react-native";

import Title from "../components/UI/Title";
import Colors from "../constants/Colors";
import Card from "../components/UI/Card";
import PrimaryButton from "../components/UI/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  const {width, height} = useWindowDimensions();
  const marginTopDistance = height < 380 ? 30 :100;
  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.Screen}>
    <View style={[styles.rootContaner, {marginTop: marginTopDistance}]}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;
// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
  },
  rootContaner: {
    flex: 1,
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 300 ? 12: 24,
    // height: deviceHeight < 300 ? 12: 24,
    // borderRadius: 150,
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
