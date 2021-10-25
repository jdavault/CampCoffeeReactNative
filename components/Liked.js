import React from "react"
import { Text, View } from "react-native";
import { Center } from "./Center";
import colors from "../assets/colors/colors";

const Liked = () => {
  return (
    <Center>
      <Text style={{
        fontFamily: "Lato-Bold",
        fontSize: 20,
        color: colors.brown
      }}>Liked Screen</Text>
    </Center>
  );
}

export default Liked;