import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Cards from "./Cards";
import Seprator from "./Seprator";

const data = [
  {
    id: "123",
    thumbnail: "https://picsum.photos/200/200",
    title: "Crypto",
    author: "Admin",
    createdAt: Date.now(),
  },
  {
    id: "54321",
    thumbnail:
      "https://images.unsplash.com/photo-1672257808583-80bfa193ec2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5Mzg4NzA4Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    title: "Custom Title 0",
    author: "Custom Author 0",
    createdAt: Date.now(),
  },
  {
    id: "78945",
    thumbnail:
      "https://images.unsplash.com/photo-1693761935581-1f6a0ab16590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5Mzg4NzE3NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    title: "Custom Title 1",
    author: "Custom Author 1",
    createdAt: Date.now(),
  },
  {
    id: "36247",
    thumbnail:
      "https://images.unsplash.com/photo-1676685385538-03ff78ba558e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5Mzg4NzIxNQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    title: "Custom Title 2",
    author: "Custom Author 2",
    createdAt: Date.now(),
  },
];

const width = Dimensions.get("window").width - 20;

export default function Home({ navigation }) {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);

  const fetchFeaturedPosts = async () => {
    await getFeaturedPosts();
  };

  useEffect(() => {
    fetchFeaturedPosts();
  }, []);

  const fetchMorePosts = async () => {};

  const fetchSinglePost = async (slug) => {
    const { error, post } = await getSinglePost(slug);
  };
  const handlePostPress = async (post) => {
    navigation.navigate("PostDetails", {});
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginTop: 15, paddingBottom: 10, marginLeft: 8 }}>
        <Cards onPress={() => handlePostPress(item)} post={item} />
      </View>
    );
  };

  const ItemSeparatorComponent = () => (
    <Seprator width="90%" style={{ marginTop: 15 }} />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      //ListHeaderComponent={ListHeaderComponent} //For search bar
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderItem={renderItem}
      // onEndReached={fetchMorePosts()}
      ListFooterComponent={() => {
        return (
          <View>
            <Text
              style={{
                fontWeight: "bold",
                color: "383838",
                textAlign: "center",
                paddingVertical: 15,
              }}
            >
              Footer
            </Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width,
    paddingTop: 50,
  },
});
