import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";

import { FlatList, Text, View, SafeAreaView } from "react-native";

import Seprator from "./components/Seprator";
import Cards from "./components/Cards";
import Slider from "./components/Slider";
import { getFeaturedPosts } from "./api/post";

import Constants from "expo-constants";
import { render } from "react-dom/cjs/react-dom.production.min";

const data = [
  {
    id: "123",
    thumbnail: "https://avatars.githubusercontent.com/u/84247444?v=4",
    title: "Crypto",
    author: "Admin",
  },
  {
    id: "1234",
    thumbnail: "https://avatars.githubusercontent.com/u/84233344?v=4",
    title: "Crypto2",
    author: "Admin",
  },
  {
    id: "12345",
    thumbnail: "https://avatars.githubusercontent.com/u/84247333?v=4",
    title: "Crypto3",
    author: "Admin",
  },
  {
    id: "123545",
    thumbnail: "https://avatars.githubusercontent.com/u/77777777?v=4",
    title: "Crypto4",
    author: "Admin",
  },
];

const CUSTOM_THEME = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: "#fff" },
};

const App = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);

  const fetchFeaturedPosts = async () => {
    const { error, posts } = await getFeaturedPosts();
    if (error) return console.log(error);
    console.log(posts);
  };

  // const fetchMorePosts = async () => {
  //   pageNo += 1;
  //   const { error, posts } = await getFeaturedPosts();
  //   if (error) return console.log(error);
  //   console.log(posts);
  // };

  

  useEffect(() => {
    fetchFeaturedPosts();
  }, []);

  const ListHeaderComponent = () => {
    return (
      <View style={{ paddingTop: Constants.statusBarHeight }}>
        {/* {featuredPosts.length ? ( */}
        <Slider data={data} title="Featured Posts" />
        {/* ) : null} */}
        <View style={{ marginTop: 10 }}>
          <Seprator width="95%" />
          <Text
            style={{
              fontSize: 22,
              fontWeight: "700",
              color: "#383838",
              marginTop: 10,
            }}
          >
            Latest Post
          </Text>
        </View>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginTop: 10 }}>
        <Cards post={item} />
      </View>
    );
  }

  const ItemSeparatorComponent = () => (
    <Seprator width="90%" style={{ marginTop: 10 }} />
  )

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
      ListHeaderComponent={ListHeaderComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderItem={renderItem}
      // onEndReached={fetchMorePosts}
    />

    // <SafeAreaView>
    //   <Slider data={data} title="Featured Posts" />
    // </SafeAreaView>

    // <NavigationContainer theme={CUSTOM_THEME}>
    //   <TabNavigator />
    // </NavigationContainer>
  );
};

export default App;
