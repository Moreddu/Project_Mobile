import React from "react";
import {
  Platform,
  Dimensions,
  ScrollView,
  Text,
  Image,
  StyleSheet
} from "react-native";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";
import FourthScreen from "../screens/FourthScreen";
import ReusableScreen from "../screens/ReusableScreen";

const DEVICE_WIDTH = Dimensions.get("window").width;

const drawerConfig = {
  drawerWidth: DEVICE_WIDTH * 0.75,
  contentComponent: props => (
    <ScrollView style={styles.mainDrawer}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.menuImage}
      />
      <DrawerItems {...props} />
    </ScrollView>
  )
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Profilo: ReusableScreen
});

const SecondStack = createStackNavigator({
  Seconda: SecondScreen,
  Quarta: FourthScreen
});

const ThirdStack = createStackNavigator({
  Terza: ThirdScreen,
  Profilo: ReusableScreen
});

export default createDrawerNavigator(
  {
    Home: HomeStack,
    Second: SecondStack,
    Third: ThirdStack,
    Profilo: ReusableScreen
  },
  drawerConfig
);

const styles = StyleSheet.create({
  mainDrawer: { padding: 10 },
  menuImage: { resizeMode: "center", padding: 10 }
});
