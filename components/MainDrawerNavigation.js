import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ImageBackground } from 'react-native';
import MainStackNavigator from './MainStackNavigation';
import EntypoIcon from "react-native-vector-icons/Entypo"
import MaterialUIIcon from "react-native-vector-icons/MaterialCommunityIcons"

import colors from '../assets/colors/colors';
import CustomSidebarMenu from './CustomSidebarMenu';
import Liked from './Liked';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        headerStyle: {
          backgroundColor: colors.white
        },
        activeTintColor: colors.white,
        headerTintColor: colors.white,
        headerTitleStyle: {
          color: colors.white
        },
        itemStyle: { marginVertical: 2 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />
      }>

      <Drawer.Screen name="Tabs" component={MainStackNavigator}
        options={{
          title: 'Home',
          drawerIcon: () => (
            <EntypoIcon
              name='home'
              size={24}
              activeTintColor={colors.white}
              color={colors.white}
            />
          )
        }}
      />
      <Drawer.Screen name="Liked" component={Liked}
        options={{
          title: 'Liked',
          drawerIcon: ({ tintColor }) => (
            <EntypoIcon
              name='heart'
              size={24}
              color={tintColor}
              activeTintColor={colors.white}
            />
          )
        }}
      />
      <Drawer.Screen name="Profile" component={Profile}
        options={{
          title: 'Profile',
          drawerIcon: ({ tintColor }) => (
            <MaterialUIIcon
              name='account'
              size={24}
              color={tintColor}
              activeTintColor={colors.white}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
}
export default MainDrawerNavigator
