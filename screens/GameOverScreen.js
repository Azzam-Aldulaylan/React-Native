import { Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Title from "../components/UI/Title";

function GameOverScreen() {
  return (
    <View style={styles.rootContaner}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/success.png")} />
      </View>
      <Text>Round reached was x to guess number y.</Text>
    </View>
  );
}

export default GameOverScreen; 

const styles = StyleSheet.create({
    rootContaner:{
    flex: 1,
    padding:24,
    justifyContent: 'center',
    alignItems: 'center',
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
});
