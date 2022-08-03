
import { Pressable, Text, View } from "react-native";
import Category from "../models/category";



function CategoryGridTile({title, color}){
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;