import {
  View,
  StyleSheet,
  SafeAreaView,
  Alert,
  FlatList,
  useWindowDimensions,
  Text,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import Instruction from "../components/UI/Instructions";
import GuessLogItem from "../components/game/GuessLogItem";
import Colors from "../constants/Colors";
import PrimaryButtonLandscape from "../components/UI/PrimaryButtonLandscape";


function generateRandomRangedNum(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomRangedNum(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomRangedNum(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "Lower" && currentGuess < userNumber) ||
      (direction === "Greater" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Invalid Input!",
        "The input is invalid. due to a cheating attempt...",
        [{ text: "Sorry!", style: "cancel" }]
      );
      return;
    }
    if (direction === "Lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomRangedNum(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;
  let content = (
    <>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instruction style={styles.InstructionText}>
          Higher or Lower?
        </Instruction>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "Grater")}>
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "Lower")}>
              <Ionicons name="md-remove" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <Card>
          <Text style={styles.Title}>Opponent's Guess</Text>
          <Instruction style={styles.InstructionText}>
            Higher or Lower?
          </Instruction>
        </Card>
        <View style={styles.buttonContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButtonLandscape onPress={nextGuessHandler.bind(this, "Grater")}>
              <Ionicons name="md-add" size={24} color={Colors.primaryW1}/>
            </PrimaryButtonLandscape>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButtonLandscape onPress={nextGuessHandler.bind(this, "Lower")}>
              <Ionicons name="md-remove" size={24} color={Colors.primaryW1}/>
            </PrimaryButtonLandscape>
          </View>
        </View>
      </>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </SafeAreaView>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  Title: {
    fontFamily: 'open-sans-bold',
    fontSize:24,
    textShadowColor: Colors.primaryB1,
    color: Colors.primaryW1,
    textAlign: 'center',
    borderColor: Colors.primaryW1,
    padding: 12,
    textShadowColor:Colors.primaryB1,
  },
  InstructionText: {
    marginBottom: 12,
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
});
