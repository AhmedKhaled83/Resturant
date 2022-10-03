import React ,{useState ,useEffect ,useRef}from 'react'
import { View, Text, Dimensions ,Animated,TouchableOpacity ,StyleSheet ,  Easing,} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const { width, height } = Dimensions.get("screen")
import Nav_Stack from './screens/Navigation/index'

import { Provider } from 'react-redux';
// import  store from './screens/Store'
import store from './screens/Store';
const App =({ })=> {
  return (
  <>
  <Provider store={store} >
<Nav_Stack/>
</Provider>

  </>
  )
}

export default App ;


