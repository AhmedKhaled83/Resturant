import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Image, FlatList } from 'react-native'
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useFocusEffect } from '@react-navigation/native';
import LottieView from 'lottie-react-native'

import { scale, } from 'react-native-size-matters';
const { width, height } = Dimensions.get('screen')


function Shopping({ navigation, route }) {


  const [itemes, setitemes] = useState([])


  useEffect(() => {



    getsave()



  }, [])



  async function getsave() {
    let list = JSON.parse(await AsyncStorage.getItem("market"))



    if (Array.isArray(list) && list.length > 0) {
      setitemes(list)
      // alert(JSON.stringify(itemes))
    } else {
      setitemes([])
    }
    // AsyncStorage.clear()

  }

  useFocusEffect(
    React.useCallback(() => {
      getsave()


      return () => {
        getsave()
      };
    }, [])
  );





  return (
    <>

      <StatusBar backgroundColor={"#EAE9EA"} barStyle="dark-content" />


      <View style={{
        flex: 1,
        backgroundColor: "#EAE9EA",

      }}>



        <FlatList data={itemes} renderItem={({ item, index }) => (

          <Animatable.View animation={'fadeInDownBig'} >
            <TouchableOpacity

              onPress={() => { navigation.navigate("Update", { item: item, index: index, getsave: getsave, }) }}

              style={{
                width: width * 0.98,
                // height: height * 0.151,
                backgroundColor: "#fff",
                borderRadius: 15,
                marginVertical: 10,
                alignSelf: "center",

              }}>
              <View style={{
                width: width * 0.98,
                // height: height * 0.10992,
                //  backgroundColor: "#0f0",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderTopStartRadius: 15,
                borderTopEndRadius: 15,
                paddingHorizontal: 2,

              }}>

                <Image source={item.image} style={{ width: width * 0.27, height: height * 0.09, borderRadius: 10, }} resizeMode={"cover"} />

                <View style={{
                  width: width * 0.66,
                  // height: height * 0.11,
                  // backgroundColor: "#ff0",
                  alignItems: "flex-end",
                  paddingHorizontal: 5,
                  borderTopEndRadius: 10,
                  paddingRight: 15
                }}>
                  <Text style={{ fontSize: scale(18), fontWeight: "500", color: "#000", marginTop: 3 }}> {item.name}</Text>
                  <Text style={{ fontSize: scale(15), color: "rgb(255, 90, 0)" }}> {item.size}  <Text style={{ color: "#000", fontWeight: "500" }}>={"\t"}Size</Text></Text>
                  <Text style={{ fontSize: scale(15), color: "rgb(255, 90, 0)", }}> {item.product_Addtion.length > 0?item.product_choose_Addtion:'no addition'}  <Text style={{ color: "#000", fontWeight: "500" }}>= Addtion</Text></Text>

                </View>




              </View>



              <View style={{
                flexDirection: "row",
                width: width * 0.98,
                // height: height * 0.04,
                //  backgroundColor: "#00f",
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 12
              }}>
                <Text style={{ fontSize: scale(19), color: "rgb(255, 90, 0)" }}><Text style={{ color: "#000", fontWeight: "500" }}>EGP</Text> {item.total_price}</Text>


                <View style={style.view_cart_plus_munis}>




                  <Text style={{ fontSize: scale(19), color: "rgb(255, 90, 0)", fontWeight: "normal" }}>{item.Counter_one_item}</Text>

                  <Text style={{ fontSize: scale(18), color: "#000", fontWeight: "bold" }}>عدد القطع = </Text>



                </View>

              </View>



            </TouchableOpacity>








          </Animatable.View>



        )} />






<TouchableOpacity
onPress={()=>{
  navigation.navigate('Payment')
}}
style={{
  width: width*0.6, 
  height : 40 , 
  backgroundColor:"rgb(255, 90, 0)",
  alignSelf:"center",
  alignItems:"center",
  justifyContent:"center",
  marginBottom:scale(20),
  marginTop:scale(5),
  borderRadius:scale(50)

}}

>
<Text style={{color:"#ffff" , fontSize:18 , fontFamily:"Cairo",fontWeight:"400"}}>الفاتورة</Text>

</TouchableOpacity>
{/* 
        <View style={{
          width: width * 0.98,
          height: height * 0.07,
          backgroundColor: "#EAE9EA",
          borderRadius: 15,
          marginVertical: 15,
          alignSelf: "center",
          paddingHorizontal: 5,
          paddingVertical: 5
        }}></View> */}


     
     
     
      </View>
    </>
  )
}
export default Shopping;


const style = StyleSheet.create({
  view_cart_plus_munis: {
    width: width * 0.37,
    height: height * 0.039,
    //  backgroundColor:"#f0f",
    marginTop: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 2
  },



})