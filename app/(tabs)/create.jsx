import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/formField'
import { ResizeMode, Video } from 'expo-av'
import { icons, images } from '@/constants'
import CustomButton from '@/components/customButton'
import * as DocumentPicker from "expo-document-picker";

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    video: null,
    thumbnail: null,
    prompt: "",
  });

  const openPicker = async (selectType) => {
    const result = await DocumentPicker.getDocumentAsync
    ({
      type: selectType === "image"
        ? ["image/jpg", "image/jpeg", "image/png"]
        : ["video/mp4", "video/mkv", "video/gif"]
    });

    if(!result.canceled) {
      if(selectType === "image") {
        setForm({...form, thumbnail: result.assets[0]});
      }
      if (selectType === "video") {
        setForm({...form, video: result.assets[0]});
      }
    }
    else {
      setTimeout(() => {
        Alert.alert("Document Picket", JSON.stringify(
          result, null, 2
        ))
      }, 100);
    }
  }

  const submit = async () => {
    if(!form.title || !form.thumbnail || !form.video || !form.prompt) {
      return Alert.alert("Please fill in all the fields.");
    }

    setUploading(true);

    try {


      Alert.alert("Success", "Video uploaded successfully");
      router.push("/home");
    } catch (err) {

    } finally {
      setUploading(false);
      setForm({
        title: "",
        video: null,
        thumbnail: null,
        prompt: ""
      });
    }
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='px-4 my-6'>
        <Text className='text-2xl text-white font-psemibold'>
          Upload Videos
        </Text>

        <FormField
          title={"Video Title"}
          value={form.title}
          placeholder={"Give your video a catch title..."}
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles={"mt-10"}
        />

        <View className='mt-7 space-y-6'>
          <Text className='text-base text-gray-100 font-pmedium'>
            Upload Video
          </Text>

          <TouchableOpacity onPress={() => openPicker("video")} className=''>
            {form.video ? (
              <Video
                source={{ uri: form.video.url }}
                className='w-full h-64 rounded-2xl'
                resizeMode={ResizeMode.COVER}
                isLooping
              />
            ) : (
              <View className='w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center'>
                <View className='h-14 w-14 border border-dashed border-secondary-100 justify-center items-center'>
                  <Image
                    source={icons.upload}
                    resizeMode='contain'
                    className='w-1/2 h-1/2'
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View className='mt-7 space-y-2'>
          <Text className='text-base text-gray-100 font-pmedium'>
            Upload Thumbnail
          </Text>

          <TouchableOpacity onPress={() => openPicker("image")} className=''>
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.url }}
                className='w-full h-64 rounded-2xl'
                resizeMode={ResizeMode.COVER}
                isLooping
              />
            ) : (
              <View className='w-full h-16 px-4 bg-black-100 rounded-2xl justify-center items-center border-2 border-black-200 flex-row space-x-2'>
                  <Image
                    source={icons.upload}
                    resizeMode='contain'
                    className='w-5 h-5'
                  />
                  <Text className='text-sm text-gray-100 font-pmedium'>
                    Choose a File
                  </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <FormField
          title={"AI Prompt"}
          value={form.prompt}
          placeholder={"The prompt you used to create this video..."}
          handleChangeText={(e) => setForm({ ...form, prompt: e })}
          otherStyles={"mt-7"}
        />

        <CustomButton 
          title={"Submit and Publish"}
          handlePress={submit}
          containerStyles={"mt-7"}
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create