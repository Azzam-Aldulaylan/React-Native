import {Text, View, StyleSheet} from 'react-native';


import { Colors } from '../../constants/Colors.js';


function NumberContainer({children}){
    return <View style={styles.container}>
        <Text  style={styles.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'white',
        padding: 24,
        margin:24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    numberText:{
        color: 'white',
        fontFamily: 'open-sans-bold',
        fontSize: 36, 
        // fontWeight: 'bold',
    },

})