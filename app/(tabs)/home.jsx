import { View, Text, FlatList, Image, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import SearchInput from '@/components/searchInput'
import Trending from '@/components/trending'

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  
  function onRefresh() {
    setRefreshing(true);

    setRefreshing(false);
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={[{ id: 1 }, { id: 2}, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => {
          <Text className='text-3xl text-white'>{item.id}</Text>
        }}
        ListHeaderComponent={() => {
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome Back
                </Text>

                <Text className='text-2xl font-psemibold text-white'>
                  GOOD Morning
                </Text>
              </View>

              <View className='mt-1.5'>
                <Image className='w-9 h-10' source={images.logoSmall} resizeMode='contain'/>
              </View>
            </View>

            <SearchInput />

            <View className='w-full flex-1 pt-5 pb-8'> 
              <Text className='text-lg font-pregular  mb-3 text-gray-100'>Latest Videos</Text>
            </View>

            <Trending posts={[{ id: 1}, { id: 2}, { id: 3}]}/>
          </View>
        }}

        ListEmptyComponent={() => {
          <EmptyState 
            title="No Posts Yet"
            subtitle="Be the first one to share a post"
          />
        }}

        refreshControl={<RefreshControl />}
      />
    </SafeAreaView>
  )
}

export default Home