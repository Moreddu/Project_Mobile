import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const SecondStack = createStackNavigator({
  Seconda: SecondScreen
});

SecondStack.navigationOptions = {
  tabBarLabel: "Second",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const ThirdStack = createStackNavigator({
  Terza: ThirdScreen
});

ThirdStack.navigationOptions = {
  tabBarLabel: "Third",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

export default createSwitchNavigator({
  HomeStack,
  SecondStack,
  ThirdStack
});
