import React from "react"
import { Text, View } from "react-native";
import { Center } from "./Center";
import colors from "../assets/colors/colors";

const Profile = () => {
  return (
    <Center>
      <Text style={{
        fontFamily: "Lato-Bold",
        fontSize: 20,
        color: colors.brown
      }}>Profile Screen</Text>
    </Center>
  );
}

export default Profile;