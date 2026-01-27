import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons } from '@/constants';
import { router } from 'expo-router';

const Profile = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { token, logout } = useGlobalContext();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await api.get(`/posts/my`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setData(res.data.posts);
    } catch (err) {
      console.log("Error while fetching posts ", err);
    } finally {
      setIsLoading(false);
    }
  }

  fetchData();

  const logOut = async () => {
    await logout();
    router.replace("/sign-in");
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
          <View className='w-full justify-center items-start mt-6 mb-12 px-4'>
            <TouchableOpacity className='w-full mb-10 items-end' onPress={logOut}>
              <Image
                source={icons.logout}
                resizeMode='contain'
                className='w-6 h-6'
              />
            </TouchableOpacity>

            <View className='w-16 h-16 border border-secondary rounded-lg justify-center items-center'>
              <Image
                source={{ uri: user?.avatar }}
                className='w-[90%] h-[90%] rounded-lg'
                resizeMode='cover'
              />
            </View>

            <InfoBox
              title={user?.username}
              containerStyles="mt-3"
              textStyles="text-lg"
            />

            <View>
              <InfoBox
                title={posts.length || 0}
                subtitle={"Posts"}
                containerStyles="mr-10"
                textStyles="text-xl"
              />

              <InfoBox
                title={"1.2k"}
                subtitle={"Followers"}
                textStyles="text-xl"
              />
            </View>
          </View>
        }}

        ListEmptyComponent={() => {
          <EmptyState
            title="No Posts Yet"
            subtitle="Be the first one to share a post"
          />
        }}
      />
    </SafeAreaView>
  )
}

export default Profile;