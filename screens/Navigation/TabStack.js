import React ,{useState ,useEffect ,useRef}from 'react'
import { View, Text, Dimensions ,Animated,TouchableOpacity ,StyleSheet ,  Easing,} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const { width, height } = Dimensions.get("screen")


import { Home ,Test} from '../Home/index'
const Tab = createBottomTabNavigator();




const TabStack =({ })=> {


  return (
    // <NavigationContainer>
    <Tab.Navigator initialRouteName='Home'
      shifting="false"

      screenOptions={{
        showLabel: true,
        tabBarActiveTintColor: 'rgb(255, 90, 0)',
        // tabBarInactiveTintColor:"#00f",
  
        headerShown: false,
        tabBarStyle: {
          width: width ,
          height: height * 0.07,
          position: "relative",
           shadowColor: "#fff",
          shadowOpacity: 0.1,
          shadowRadius: 20,
          backgroundColor: "#fff",
          alignSelf: "center",
          
paddingBottom:5

        },
        tabBarLabelStyle: {
          fontSize: 13,fontWeight:"500"
        },

      
      }}
      


    >
      <Tab.Screen name="Home" component={Home} 

        options={{
      
        

          tabBarIcon: ({ color,focused }) => (
           
              
            <TouchableOpacity>
              <FontAwesome5 name="r-project" color={color} size={22} />
            </TouchableOpacity>
           
          )
        }}



      />

      <Tab.Screen name="Account" component={Test}

        options={{
          // tabBarShowLabel: false,
          tabBarIcon: ({ color}) => (
         
            <View>
                
              <FontAwesome5 name="user-alt" color={color} size={22} />
            </View>
          )
        }}



      />


    </Tab.Navigator>
    // </NavigationContainer>
  )
}

export default TabStack ;


