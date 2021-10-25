import React, { useState, useContext } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import colors from "../assets/colors/colors"
import { AuthContext } from "./AuthProvider"
import Center from "./Center"

function Login() {

  const { user, login } = useContext(AuthContext)
  const [userName, setUserName] = useState(null)
  const [password, setPassword] = useState(null)

  const submitLogin = () => {
    if (userName == "Joe@davault.dev")
      login()
    else
      alert("try again, hint: davault.dev")
  }
  return (
    <Center>
      <Text style={styles.headerText}>Welcome To Camp Coffee</Text>
      <View style={styles.userNameWrapper}>
        <Text style={styles.userNameLabel}>UserName: </Text>
        <TextInput
          style={styles.inputText}
          placeholder="UserName..."
          placeholderTextColor={colors.darkGray}
          onChangeText={text => setUserName(text)} />

      </View>
      <View style={styles.passwordWrapper}>
        <Text style={styles.passwordLabel}>Password: </Text>
        <TextInput
          style={styles.inputText}
          placeholder="Password..."
          secureTextEntry={true}
          placeholderTextColor={colors.darkGray}
          onChangeText={text => setPassword(text)} />
      </View>
      <TouchableOpacity style={styles.loginBtn}
        onPress={() => submitLogin()
        }>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </Center>
  )
}

const styles = StyleSheet.create({
  userNameWrapper: {
    flexDirection: "row",
    paddingBottom: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  passwordWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  userNameLabel: {
    fontFamily: "Lato-Bold",
    fontSize: 15,
    color: colors.brown,
  },
  passwordLabel: {
    fontFamily: "Lato-Bold",
    fontSize: 15,
    color: colors.brown,
  },
  headerText: {
    fontFamily: "Lato-Bold",
    fontSize: 24,
    paddingBottom: 20,
    color: colors.brown,
  },
  inputText: {
    paddingHorizontal: 60,
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  inputView: {
    width: "80%",
    backgroundColor: colors.gray,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    padding: 20
  },
  loginBtn: {
    width: "70%",
    backgroundColor: colors.brown,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    fontFamily: "Lato-Bold",
    fontSize: 20,
    color: colors.white,
  }
})
export default Login