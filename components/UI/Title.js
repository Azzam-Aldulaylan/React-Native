import {Text, StyleSheet} from 'react-native';

import Colors from "../../constants/Colors";

function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
      fontFamily: 'open-sans-bold',
        fontSize:24,
        textShadowColor: Colors.primaryB1,
        color: Colors.primaryW1,
        textAlign: 'center',
        borderColor: Colors.primaryW1,
        padding: 12,
        textShadowColor:Colors.primaryB1,
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:16,
    },
});
