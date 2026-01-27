import { icons } from "@/constants";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const SearchInput = ({ initialQuery }) => {
  const [query, setQuery] = useState(initialQuery || "");
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View
        className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary flex flex-row items-center justify-center"
      >
        <TextInput
          className="flex-1 w-full font-psemibold text-white text-base"
          value={value}
          placeholder={"Search for a video topic"}
          placeholderTextColor={"#CDCDE0"}
          onChangeText={(e) => setQuery(e)}
          keyboardType={keyboardType}
        />

        <TouchableOpacity
          onPress={() => {
            if(!query) {
              return Alert.alert("Missing query", "Please input something to search results across database.");
            }

            if (pathname.startsWith("/search")) {
              router.setParams({ query })
            }
            else {
              router.replace(`/search/${query}`);
            }
          }}
        >
            <Image
                source={icons.search}
                className="w-6 h-6"
                resizeMode="contain"
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
