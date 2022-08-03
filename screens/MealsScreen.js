import {View, Text, StyleSheet} from 'react-native';

function MealsScreen(){
    return (
        <View style={styles.container}>
            <Text>Meals Screen</Text>
        </View>
    );
}

export default MealsScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
    },
});