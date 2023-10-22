import React, { Component } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native";
import dateFormat from "dateformat";

const IMAGE_W = 100;
export default Cards = ({ post, onPress }) => {
  const { thumbnail, title, createdAt, author } = post;

  const getThumbnail = (uri) => {
    if (uri) return { uri };

    return require("../assets/default_thumbnail.jpeg");
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress} style={{ flexDirection: "row" }}>
        <Image
          source={getThumbnail(thumbnail)}
          style={{ width: IMAGE_W, height: IMAGE_W / 1.7 }}
        />

        <View style={{ flex: 1, marginLeft: 5 }}>
          <Text style={{ fontWeight: "700", fontSize: 16, color: "#383838" }}>
            {title}
          </Text>
          <Text style={{ fontSize: 14, color: "#d3d3d3" }}>
            {dateFormat(createdAt, "mediumDate")} - {author}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
