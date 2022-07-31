import { Text, StyleSheet} from "react-native";

function Instruction(children){
    return <Text style={styles.Instruction}>{children}</Text>

}

export default Instruction;

const styles = StyleSheet.create({
    Instruction:{
        color: Colors.primaryW1,
        fontSize: 16,
    },
});