import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import Search from "../components/Search";
import { Entypo, Feather } from "@expo/vector-icons";
import AppNavigator from "./AppNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Entypo name="home" size={size} color={color} />;
          },
          headerShown: false,
        }}
        name="HomeScreen"
        component={AppNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Feather name="search" size={size} color={color} />;
          },
        }}
        name="Search"
        component={Search}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
