import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/formField';
import CustomButton from '@/components/customButton';
import { Link } from 'expo-router';

const SignIn = () => {
  const [form, setform] = useState({
    email: "",
    password: ""
  });

  function onSubmit(e) {
    e.preventDefault();


  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className=''>
        <View className='w-full justify-center min-h-[83vh] px-4 my-6'>
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
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(val) => setform({ ...form, password: val })}
            otherStyles="mt-7"
            keyboardType={"password"}
          />

          <CustomButton
            title={"Sign In"}
            handlePress={onSubmit}
            containerStyles={"mt-5"}
            textStyles={"text-white"}
            isLoading={false}

          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>Don't Have an account?</Text>
            <Link href={"/sign-up"} className='text-secondary text-lg font-psemibold'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn