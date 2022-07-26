import { TextInput, View, StyleSheet, } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

function StartGameScreen() {
    return(
        <View style={styles.InputContainer}>
            <TextInput/>
            <PrimaryButton>Rest</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}


export default StartGameScreen;


const styles = StyleSheet.create({
    InputContainer:{
    marginTop: 100,
    marginHorizontal: 24,
    padding:16,
    backgroundColor: "#72063c",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    }
})