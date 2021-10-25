import React from "react"
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import EntypoIcon from "react-native-vector-icons/Entypo"
import MaterialUIIcon from "react-native-vector-icons/MaterialCommunityIcons"
import colors from "../assets/colors/colors";
import Home from "./Home"
import Liked from "./Liked"
import Profile from "./Profile"

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (<Tab.Navigator
    tabBarOptions={{
      styles: styles.tabBar,
      activeTintColor: colors.brown,
      inactiveTintColor: colors.gray,
      showLabel: false
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => <EntypoIcon name="home" size={32} color={color} />,
      }} />
    <Tab.Screen name="Liked" component={Liked}
      options={{
        tabBarIcon: ({ color }) => <EntypoIcon name="heart" size={32} color={color} />,
      }} />
    <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarIcon: ({ color }) => <MaterialUIIcon name="account" size={32} color={color} />,
      }} />
  </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})
