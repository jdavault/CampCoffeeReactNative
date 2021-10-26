import React from "react"
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Center from "./Center";
import colors from "../assets/colors/colors";

const Profile = ({ navigation }) => {
  return (
    <Center>
      <Text style={{
        fontFamily: "Lato-Bold",
        fontSize: 30,
        color: colors.brown
      }}>Profile Screen</Text>
      <TouchableOpacity style={styles.btn}
        onPress={() => navigation.goBack()
        }>
        <Text style={styles.btnText}>Back To Main ...</Text>
      </TouchableOpacity>

    </Center>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "50%",
    backgroundColor: colors.brown,
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  btnText: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
    color: colors.white,
  }

})
export default Profile;