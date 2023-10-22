import { Text, View } from "react-native";
import React, { Component } from "react";
import MarkDown from "react-native-markdown-display";
import { ScrollView } from "react-native-web";

const PostDetail = ({ route }) => {
  const post = route.params?.post;

  const Copy = `# h1 Heading 8-) **This is some bold text!** This is normal text `;

  //   if (!post) return null;

  //   const { title, thumbnail, tags, createdAt, author, content } = post;

  //   console.log(route.params);
  return (
    <ScrollView>
      <View>
        <Text>I am inside the card</Text>
        {/* <Text>{title}</Text>
      <Text>{author}</Text>
      <Text>{tags.join(", ")}</Text> */}
      </View>
      <MarkDown>{Copy}</MarkDown>
    </ScrollView>
  );
};

export default PostDetail;
