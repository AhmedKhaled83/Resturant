import React ,{useState ,useEffect ,useRef}from 'react'
import { View, Text, Dimensions ,Animated,TouchableOpacity ,StyleSheet ,  Easing,} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { Login ,SignUp ,ForgetPassword , CheckingPassword,NewPassword,Onboarding,SplaceScreen} from '../Auth/index';


const Stack = createNativeStackNavigator();


const Atuh_Stack =({ route})=> {
  return (

      <Stack.Navigator initialRouteName="SplaceScreen" screenOptions={{ headerShown: false , gestureEnabled:true ,gestureDirection :'horizontal'}}  >
        <Stack.Screen name="SplaceScreen" component={SplaceScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="CheckingPassword" component={CheckingPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        
        
      </Stack.Navigator>
 


  )
}
export default Atuh_Stack;
