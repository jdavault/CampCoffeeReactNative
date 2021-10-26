import React, { useContext, useState, useEffect } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { ActivityIndicator, AsyncStorage, Text } from 'react-native';
import MainDrawerNavigator from './MainDrawerNavigation';

import Center from './Center';
import { AuthContext } from './AuthProvider';
import Login from './Login';

// Addresses the "Lato is not a system font" error
const Main = () => {
  let [fontsLoaded] = useFonts({
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
  });

  const { user, login } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    //check if the user is logge in or not
    AsyncStorage.getItem("user")
      .then(userString => {
        if (userString) {
          //decode it
          login()
        }
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
      })
  }, [])

  if (loading || !fontsLoaded) {
    return <Center>
      <ActivityIndicator size="large" />
    </Center>
  }

  return (
    <NavigationContainer>
      {user ? <MainDrawerNavigator /> : <Login />}
    </NavigationContainer>
  )
}

export default Main;