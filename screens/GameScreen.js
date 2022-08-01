import { View, StyleSheet, SafeAreaView, Alert } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/UI/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Card from "../components/UI/Card";
import Instruction from "../components/UI/Instructions";

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
  const initialGuess = generateRandomRangedNum(
    1,
    100,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() =>{
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

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
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instruction style={styles.InstructionText}>Higher or Lower?</Instruction>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "Grater")}>
          <Ionicons name="md-add" size={24}/>
          </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "Lower")}>
          <Ionicons name="md-remove" size={24}/>
          </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View>LOG ROUNDS</View> */}
    </SafeAreaView>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
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
});
