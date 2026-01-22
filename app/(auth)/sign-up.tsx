import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/formField';
import CustomButton from '@/components/customButton';
import { Link, router } from 'expo-router';
import api from "../../api";
import * as SecureStore from "expo-secure-store";

const SignUp = () => {
  const [form, setform] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [isSubmitting, setisSubmitting] = useState(false);

  async function onSubmit(e: any) {
    const { username, email, password } = form;

    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill alt the fields.");
      return;
    }

    setisSubmitting(true);

    try {
      console.log("username: ", username);
      
      const res = await api.post("/auth/sign-up", {
        username, email, password
      });

      // await SecureStore.setItemAsync("token", res.data.token);
      router.replace("/home");

      // return res.data;
    } catch (err: any) {
      console.log("Error while signing up: ", err);

    }
    finally {
      setisSubmitting(false);
    }
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
            Sign Up to Aora
          </Text>

          <FormField
            title="Username"
            placeholder="Enter your username"
            value={form.username}
            handleChangeText={(e: any) => setform({ ...form, username: e })}
            otherStyles="mt-7"
            keyboardType="username"
          />

          <FormField
            title="Email"
            placeholder="Enter your email address"
            value={form.email}
            handleChangeText={(e: any) => setform({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(val: any) => setform({ ...form, password: val })}
            otherStyles="mt-7"
            keyboardType={"password"}
          />

          <CustomButton
            title={"Sign Up"}
            handlePress={onSubmit}
            containerStyles={"mt-5"}
            textStyles={"text-white"}
            isLoading={false}

          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-psemibold'>Already Have an account?</Text>
            <Link href={"/sign-in"} className='text-secondary text-lg font-psemibold'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp