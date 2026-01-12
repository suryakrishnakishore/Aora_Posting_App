import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = ({ title, placeholder, value, handleChangeText, otherStyles, keyBoardType }) => {

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className='border-2 border-red-500 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center' style={{ backgroundColor: "#1E1E2D", borderColor: ""}}>
        <TextInput 
            className='flex-1 font-psemibold text-white text-base'
            value={value}
            placeholder={placeholder}
            placeholderTextColor={"#7b7b8b"}
            onChangeText={handleChangeText}
            secureTextEntry={title === "Password" ? true : false}
        />
      </View>   
    </View>
  )
}

export default FormField;