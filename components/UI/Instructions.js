import { Text, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

function Instructions({children}){
    return <Text style={styles.Instruction}>{children}</Text>

}

export default Instructions;

const styles = StyleSheet.create({
    Instruction:{
        color: Colors.primaryW1,
        fontSize: 16,
    },
});