import {View, Text, StyleSheet} from 'react-native';

function Subtitle({children}){
    return (
        <View style={styles.subtitleContainer}>
        <Text>{children}</Text>
        </View>
    );
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 6,
        margin: 4,
        borderBottomWidth: 2,
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 3,
        borderBottomColor: "white",
      },
});