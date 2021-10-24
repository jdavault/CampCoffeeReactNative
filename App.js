import React from "react"
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import EntypoIcon from "react-native-vector-icons/Entypo"
import MaterialUIIcon from "react-native-vector-icons/MaterialCommunityIcons"

import colors from "./assets/colors/colors"
import Home from "./components/Home"
import Details from "./components/Details"
import Liked from "./components/Liked"
import Profile from "./components/Profile"

//EntypoIcon.loadFont()
//MaterialUIIcon.loadFont()
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (<Tab.Navigator
    tabBarOptions={{
      styles: styles.tabBar,
      activeTintColor: colors.orange,
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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
})


export default App;