import { Text, View } from "react-native";
import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import PostDetail from "../components/PostDetail";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        component={Home}
        name="Home"
      />
      <Stack.Screen component={PostDetail} name="PostDetails" />
    </Stack.Navigator>
  );
};

export default AppNavigator;
