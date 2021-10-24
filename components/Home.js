import React from "react"
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";
import colors from "../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather"
import EntypoIcon from "react-native-vector-icons/Entypo"

import { SafeAreaView } from "react-native-safe-area-context"

import coffeeData from "../assets/data/coffeeData"
import coffeeCategoryData from "../assets/data/coffeeCategoryData"
import learnMoreData from "../assets/data/learnMoreData"
import discoverCoffeeData from "../assets/data/discoverCoffeeData"
import profile from "../assets/images/person.png"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"

const Home = ({ navigation }) => {

  const renderDiscoveryItem = ({ item }) => {
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

  const renderActivityItem = ({ item }) => {
    return (
      <View style={[styles.activityItemWrapper,
      {
        marginLeft: item.id === 'activities-1' ? 20 : 0
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
      {/* Header */}
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
      {/* Discover */}
      <View style={styles.discoverWrapper}>
        <Text style={styles.discoverTitle}>Discover</Text>
        <View style={styles.discoverCategoriesWrapper}>
          <Text style={[styles.discoverCategoryText, { color: colors.orange }]}>All</Text>
          <Text style={styles.discoverCategoryText}>Destinations</Text>
          <Text style={styles.discoverCategoryText}>Cities</Text>
          <Text style={styles.discoverCategoryText}>Experiences</Text>
        </View>
        <View style={styles.discoverItemsWrapper}>
          <FlatList
            data={discoverCoffeeData}
            renderItem={renderDiscoveryItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/* Activities */}
      <View style={styles.activitiesWrapper}>
        <Text style={styles.activitiesTitle}>Activities</Text>
        <View style={styles.discoverItemsWrapper}>
          <FlatList
            data={coffeeData}
            renderItem={renderActivityItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {/*   */}
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
  activitiesWrapper: {

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
    color: colors.gray

  },
  discoverItem: {
    width: 179,
    height: 250,
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
    marginTop: 20
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"

  },
  menuIcon: {
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10
  },
  activitiesWrapper: {
    marginTop: 10

  },
  activitiesTitle: {
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
    color: colors.gray
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
    marginVertical: 20
  },
  learnMoreItem: {
    height: 180,
    width: 170,
    justifyContent: "flex-end",
    marginRight: 20
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItemText: {
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20

  },
})

export default Home;