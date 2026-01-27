import { View, Text, FlatList, Image, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import SearchInput from '@/components/searchInput';
import Trending from '@/components/trending';
import { useGlobalContext } from '@/context/GlobalProvider';
import VideoCard from '@/components/videoCard';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { token, user } = useGlobalContext();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await api.get("/posts",
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setData(res.data.posts);
    } catch (err) {
      console.log("Error while fetching posts ", err);
    } finally {
      setIsLoading(false);
    }
  }

  const fetchLatestPosts = async () => {
    setLoading(true);
    try {
      const res = await api.get("/posts/latest",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setLatestPosts(res.data.latestPosts);
    } catch (err) {
      console.log("Error while fetching latest posts: ", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function onRefresh() {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={data}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => {
          <VideoCard video={item} />
        }}
        ListHeaderComponent={() => {
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome back,
                </Text>

                <Text className='text-2xl font-psemibold text-white'>
                  {user?.username}
                </Text>
              </View>

              <View className='mt-1.5'>
                <Image className='w-9 h-10' source={images.logoSmall} resizeMode='contain' />
              </View>
            </View>

            <SearchInput />

            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-lg font-pregular  mb-3 text-gray-100'>Latest Videos</Text>
            </View>

            <Trending posts={latestPosts} />
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

export default Home;