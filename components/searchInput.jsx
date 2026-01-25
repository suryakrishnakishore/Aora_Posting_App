import { icons } from "@/constants";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const SearchInput = ({
  title,
  placeholder,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
}) => {
  const [showPassword, setShowPassword] = useState(false);

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
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType}
        />

        <TouchableOpacity>
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
