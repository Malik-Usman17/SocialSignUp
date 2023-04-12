import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'

const App = () => {

  const [userInfoState, setUserInfoState] = useState(null);

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
      //setUserInfoState({userInfo})
      // this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error)
      } else {
        // some other error happened
        console.log(error)
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure()
  }, [])

  return (
    <View style={styles.container}>
      <Text>App</Text>

      <TouchableOpacity
        style={styles.googleBtn}
        onPress={googleSignIn}>
        <Text>Google Sign in</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  googleBtn: {
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 25
  }
})