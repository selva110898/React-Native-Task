import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ProductDetail from './Src/Screens/Productdetail'
import SplashScreen from './Src/Screens/SplashScreen'
import Onboarding from './Src/Screens/OnBoarding'
import Bridge from './Src/Navigation/Bridge'
import Shop from './Src/Screens/Shop'
import Explore from './Src/Screens/Explore'
import Favourite from './Src/Screens/Favourite'
import { Provider } from 'react-redux'
import { store } from './Src/Redux/Store'
// import Shop from './Src/Screens/Shop'
import RNSplashScreen from 'react-native-splash-screen'
import Login from './Src/Screens/Login'
const App = () => {
  useEffect(() => {
    RNSplashScreen?.hide()

  }, [])

  return (
    <Provider store={store}>
      <Bridge />
      {/* <Login/> */}
      {/* <Onboarding/> */}
      {/* <Shop/>/ */}
      {/* <SplashScreen/> */}
    </Provider>
    // <Shop/>
    // <Favourite/>
    // <Explore/>
    // <Onboarding/>
    // <View>
    //   <Text>App</Text>
    // </View>
  )
}

export default App

const styles = StyleSheet.create({})