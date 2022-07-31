import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";


import PrimaryButton from "../components/UI/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnterNumber] = useState("");

  function NumberInputHandler(enterText) {
    setEnterNumber(enterText);
  }

  function restInputHandler() {
    setEnterNumber('');
  }

  function conformInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 0 and 99", [
        { text: "okay", style: "destructive", onPress: restInputHandler }
      ]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.NumberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={NumberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={restInputHandler}>Rest</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={conformInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  InputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primaryBurgundy,
    borderRadius: 8,
    shadowColor: Colors.primaryB1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
  },
  NumberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.primaryW1,
    borderBottomWidth: 2,
    color: Colors.primaryW1,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
