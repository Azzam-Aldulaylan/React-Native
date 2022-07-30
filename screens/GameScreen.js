import {Text,View,StyleSheet, SafeAreaView} from 'react-native';

function GameScreen () {
    return (
    <SafeAreaView style={styles.screen}>
        <Text>Opponent's Guess</Text>
        {/* Guess */}
        <View>
            <Text>Higher or Lower?</Text>
            {/* + - */}
        </View>
        {/* <View>LOG ROUNDS</View> */}
    </SafeAreaView>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding:24,

    }
})