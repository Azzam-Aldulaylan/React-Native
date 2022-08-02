import {Text, View, StyleSheet, Dimensions} from 'react-native';


import Colors from '../../constants/Colors.js';


function NumberContainer({children}){
    return <View style={styles.container}>
        <Text  style={styles.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.primaryBurgundy,
        padding: deviceWidth < 300 ? 12: 24,
        margin:deviceWidth < 300 ? 12: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        color: Colors.primaryW1,
    },
    numberText:{
        color: 'white',
        fontFamily: 'open-sans-bold',
        fontSize: 36, 
        color: Colors.primaryBurgundy,
    },

})