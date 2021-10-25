import React, { useContext, useState, useEffect } from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import TabNavigator from "./MainTabNavigation";

import Details from "./Details"
import Login from './Login';

const Stack = createStackNavigator();

function MainStackNavigator() {

  return (
    <Stack.Navigator initialRouteName="TabNavigator">
      <Stack.Screen name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default MainStackNavigator
