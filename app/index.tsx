import "./globals.css"
import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl text-dark-200">
        Welcome to Nativewind!
      </Text>
      
    </View>
  );
}
