// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  ImageBackground,
  Dimensions
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import colors from '../assets/colors/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

//const winHeight = Dimensions.get("window").height
//const winWidth = Dimensions.get("window").width

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      <ImageBackground
        source={require('../assets/images/5.jpg')}

        //source={{ uri: BASE_PATH + proileImage }}
        style={styles.sideMenuProfileIcon}
      >
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            activeTintColor={Colors.white}
            inactiveTintColor={Colors.white}
            color={Colors.white}
            style={{ fontFamily: "Lato-Bold", color: colors.white }}
            label="Visit Us"
            onPress={() => Linking.openURL('https://camp-coffee.netlify.app')}
          />
          <View style={styles.customItem}>
            <Text style={{ fontFamily: "Lato-Bold", color: colors.white }}
              onPress={() => {
                Linking.openURL('https://aboutreact.com/');
              }}>
              Rate Us
            </Text>
            <Image
              source={{ uri: BASE_PATH + 'star_filled.png' }}
              style={styles.iconStyle}
            />
          </View>
        </DrawerContentScrollView>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: colors.white
          }}>
          www.campcoffee.com
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 270,
    height: 800,
    opacity: .9,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;