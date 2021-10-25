import React from "react"
import { Dimensions, ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../assets/colors/colors";
import Entypo from "react-native-vector-icons/Entypo"

const height = Dimensions.get("window").height

const Details = ({ route, navigation }) => {
  const { item } = route.params
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.imageBig}
        style={styles.backgroundImage}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={32} color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.itemTitlesWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={24} color={colors.white} />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name="heart" size={36} color={colors.red} />
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <View style={styles.infoWrapper}>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>PRICE</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>${item.price}</Text>
                <Text style={styles.infoSubText}>/lb</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>RATING</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.rating}</Text>
                <Text style={styles.infoSubText}>/5</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>SHELF LIFE</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.shelfLife}</Text>
                <Text style={styles.infoSubText}> months</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonWrapper}
          onPress={() => alert("Lets Buy It!")}>
          <Text style={styles.buttonText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  backgroundImage: {
    height: height * 0.50,
    justifyContent: "space-between"
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 25
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60
  },
  itemTitlesWrapper: {
    marginHorizontal: 20,
    marginBottom: 20
  },
  itemTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 30,
    color: colors.white
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  locationText: {
    fontFamily: "Lato-Bold",
    fontSize: 16,
    color: colors.white

  },
  heartWrapper: {
    position: "absolute",
    right: 40,
    top: -55,
    width: 55,
    height: 55,
    backgroundColor: colors.white,
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  descriptionWrapper: {
    marginHorizontal: 20,
    marginVertical: 30
  },
  descriptionText: {
    fontFamily: "Lato-Regular",
    fontSize: 14,
    color: colors.darkGray,
    height: 85
  },
  descriptionTextWrapper: {
    //marginTop: 10,
    marginHorizontal: 10
  },
  descriptionTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: colors.black
  },
  descriptionText: {
    marginTop: 20,
    fontFamily: "Lato-Regular",
    fontSize: 16,
    color: colors.darkGray
  },
  infoWrapper: {
    marginTop: 10,
    flexDirection: "row",
    marginRight: 20,
    justifyContent: "space-between"
  },
  infoItem: {},
  infoTitle: {
    fontFamily: "Lato-Bold",
    fontSize: 12,
    color: colors.darkGray

  },
  infoTextWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5

  },
  infoText: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
    color: colors.brown

  },
  infoSubText: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
    color: colors.darkGray

  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: colors.brown,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",

  },
  buttonText: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
    color: colors.white,
  },

})
export default Details;