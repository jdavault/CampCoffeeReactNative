import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import Details from "./Details"
import TabNavigator from "./MainTabNavigation";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <>
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
    </>
  )
}

export default MainStackNavigator
