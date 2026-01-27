import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  const { query } = useLocalSearchParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useGlobalContext();

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


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => {
          <VideoCard video={item} />
        }}
        ListHeaderComponent={() => {
          <View className='my-6 px-4'>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Search Results
                </Text>

                <Text className='text-2xl font-psemibold text-white'>
                   {query}
                </Text>
                
                <View className='mt-6 mb-8'>
                  <SearchInput initialQuery={query} />
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

export default Search