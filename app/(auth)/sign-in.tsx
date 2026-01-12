import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/formField';

const SignIn = () => {
  const [ form, setform ] = useState({
    email: "",
    password: ""
  });

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className=''>
        <View className='w-full justify-center h-full px-4 my-6'>
          <Image 
            source={images.logo}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />

          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold '>
            Log in to Aora
          </Text>

          <FormField 
            title="Email"
            placeholder="Enter your email address"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e})}
            otherStyles="mt-7"
            keyBoardType="email-address"
          />

          <FormField 
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(val) => setform({ ...form, password: val})}
            otherStyles="mt-7"
            keyBoardType={""}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn