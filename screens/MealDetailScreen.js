import { Text } from "react-native";

function MealDetailScreen({route}){
    const  mealId = route.params.mealId; 
    return <Text>ddd {mealId}</Text>
}

export default MealDetailScreen;