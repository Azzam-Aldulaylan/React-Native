import { Text, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

function Instructions({children, style}){
    return <Text style={[styles.Instruction, style]}>{children}</Text>

}

export default Instructions;

const styles = StyleSheet.create({
    Instruction:{
        fontFamily: 'open-sans',
        color: Colors.primaryW1,
        fontSize: 16,
    },
});