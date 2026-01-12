import { Link } from "expo-router";
import "./globals.css"
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl text-dark-200">
        Welcome to Nativewind!
      </Text>
      <Link href={"/profile"}>Go to Profile</Link>
    </View>
  );
}
