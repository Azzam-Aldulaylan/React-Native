import { View, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/Colors"

function Card({children}){
    return(
        <View style={styles.card}>{children}</View>
    );
}


export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        padding: deviceWidth < 300 ? 12: 24,
        backgroundColor: Colors.primaryBurgundy,
        borderRadius: 8,
        shadowColor: Colors.primaryB1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.3,
      },
});