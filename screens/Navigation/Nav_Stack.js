import React ,{useState ,useEffect ,useRef}from 'react'
import { View, Text, Dimensions ,Animated,TouchableOpacity ,StyleSheet ,  Easing,} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import {OPtionsFood ,Product_itemes,Product_detalies,Shopping,Update ,Payment} from '../Home/index'


import TabStack from './TabStack';
import Atuh_Stack from './Auth_Stack';
const Stack = createNativeStackNavigator();


const Nav_Stack =({ route})=> {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Atuh_Stack" screenOptions={{ headerShown: false , gestureEnabled:true ,gestureDirection :'horizontal'}}  >
      <Stack.Screen name="Atuh_Stack" component={Atuh_Stack} />
        <Stack.Screen name="TabStack" component={TabStack} />
        <Stack.Screen name="OptionsFood" component={OPtionsFood} />
        <Stack.Screen name="Product_itemes" component={Product_itemes} />
        <Stack.Screen name="product_detalies" component={Product_detalies}  />
        <Stack.Screen name="Shopping" component={Shopping} />
        <Stack.Screen name="Update" component={Update} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>


  )
}
export default Nav_Stack;
