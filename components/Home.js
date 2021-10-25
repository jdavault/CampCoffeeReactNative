import React from "react"
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";
import colors from "../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather"
import EntypoIcon from "react-native-vector-icons/Entypo"

import { SafeAreaView } from "react-native-safe-area-context"

import coffeeTypes from "../assets/data/coffeeTypes"
import coffeeCategories from "../assets/data/coffeeCategories"
import learnMoreData from "../assets/data/learnMoreData"
import coffeeDiscoveryData from "../assets/data/coffeeDiscoveryData"
import profile from "../assets/images/joe.jpg"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"

const Home = ({ navigation }) => {

  const renderDiscoverItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { item })}
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            { marginLeft: item.id === "discover-1" ? 20 : 0 }
          ]}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <EntypoIcon name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  const renderTypeItems = ({ item }) => {
    return (
      <View style={[styles.activityItemWrapper,
      {
        marginLeft: item.id === 'coffee-1' ? 20 : 0
      }]}>
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    )
  }

  const renderLearnMoreItem = ({ item }) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.learnMoreItem,
          { marginLeft: item.id === "learnMore-1" ? 20 : 0 }
        ]}
        imageStyle={styles.learnMoreItemImage}
      >
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </ImageBackground>
    )
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header - hamburger menu and profile image */}
      <SafeAreaView>
        <View style={styles.menuWrapper}>
          <Feather
            name="menu"
            size={32}
            color={colors.black}
            style={styles.menuIcon} />
          <Image source={profile} style={styles.profileImage} />
        </View>
      </SafeAreaView>
      {/* Discover -- rolling images */}
      <View style={styles.discoverWrapper}>
        <Text style={styles.discoverTitle}>Discover Camp Coffee</Text>
        <View style={styles.discoverCategoriesWrapper}>
          <Text style={[styles.discoverCategoryText, { color: colors.brown }]}>All</Text>
          <Text style={styles.discoverCategoryText}>Latte</Text>
          <Text style={styles.discoverCategoryText}>Cappuccino</Text>
          <Text style={styles.discoverCategoryText}>Americano</Text>
        </View>
        <View style={styles.discoverItemsWrapper}>
          <FlatList
            data={coffeeDiscoveryData}
            renderItem={renderDiscoverItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* Types of Beans */}
      <View style={styles.coffeeTypesWrapper}>
        <Text style={styles.coffeeTypesTitle}>Types of Beans</Text>
        <View style={styles.discoverItemsWrapper}>
          <FlatList
            data={coffeeTypes}
            renderItem={renderTypeItems}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* Learn more data -- coffee makers */}
      <View style={styles.learnMoreWrapper}>
        <Text style={styles.learnMoreTitle}>Learn More</Text>
        <View style={styles.learnMoreItemsWrapper}>
          <FlatList
            data={learnMoreData}
            renderItem={renderLearnMoreItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  coffeeTypesWrapper: {

  },
  container: {
    flex: 1,
    color: colors.white
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: "row",
    marginTop: 20
  },
  discoverCategoryText: {
    marginRight: 30,
    fontFamily: "Lato-Regular",
    fontSize: 16,
    color: colors.mediumGray

  },
  discoverItem: {
    width: 179,
    height: 230,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: colors.white
  },
  discoverItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  discoverItemTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: colors.white
  },
  discoverItemsWrapper: {
    paddingVertical: 20
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato-Bold",
    fontSize: 32

  },
  discoverWrapper: {
    marginTop: 10
  },
  coffeeTypesWrapper: {
    marginTop: 10

  },
  coffeeTypesTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: colors.black
  },
  activityItemsWrapper: {
    paddingVertical: 20
  },
  activityItemWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 20
  },
  activityItemImage: {
    width: 36
  },
  activityItemText: {
    marginTop: 5,
    fontFamily: "Lato-Bold",
    fontSize: 14,
    color: colors.mediumGray
  },
  learnMoreWrapper: {
    marginTop: 10

  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: colors.black
  },
  learnMoreItemsWrapper: {
    paddingVertical: 20
  },
  learnMoreItem: {
    height: 180,
    width: 170,
    justifyContent: "flex-end",
    marginRight: 15
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItemText: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 15,
    marginVertical: 10

  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10
  }

})

export default Home;