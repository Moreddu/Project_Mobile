import React from 'react';
import { Platform } from 'react-native';
//import StyleSheet from "react-native"
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';


import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ReusableScreen from '../screens/ReusableScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});



const LinksStack = createStackNavigator({
  Links: LinksScreen,
});



const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});



export default createDrawerNavigator({
  Home: HomeStack,
  Second: LinksStack,
  Third: SettingsStack,
  Reusable: ReusableScreen,
}
);

//const styles= StyleSheet.create({
  //mainDrawer: {padding:10},
  //menuImage: {resizeMode: "center", padding: 10}
//});

