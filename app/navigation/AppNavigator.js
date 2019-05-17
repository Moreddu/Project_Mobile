import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Icon,
  Button
} from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  DrawerActions
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import MainDrawerNavigator from "./MainDrawerNavigator";
import MainSwitchNavigator from "./MainSwitchNavigator";
import { Ionicons } from "@expo/vector-icons";

MainDrawerNavigator.navigationOptions = ({ navigation }) => ({
  header: null
});

MainTabNavigator.navigationOptions = ({ navigation }) => ({
  header: null
});

MainSwitchNavigator.navigationOptions = ({ navigation }) => ({
  header: null
});

export default createAppContainer(
  createStackNavigator({
    //Main: MainTabNavigator
    Main: MainDrawerNavigator
    //Main: MainSwitchNavigator
  })
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  drawerButton: {
    width: 24,
    height: 24,
    marginLeft: 16
  }
});
