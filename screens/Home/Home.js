import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, StatusBar, FlatList, Image } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('screen')
import LottieView from 'lottie-react-native';
import { scale, } from 'react-native-size-matters';


import {useSelector , useDispatch}  from 'react-redux'


function Home({ navigation }) {
  const [count, setcount] = useState(0);

  const [count_show, setcount_show] = useState(false);
  const state = useSelector( (state)=> state.Data)
  const [order, setorder] = useState(state.Categories)
  // const [order, setorder] = useState([

  //   {
  //     id: "1",
  //     name: "FOOD",
  //     image:images.checken,
  //     itemes: [
  //       {
  //         itemes_name: "PIZZA",
  //         itemes_image:images.pizza,
  //         product: [
  //           {
  //             product_id: "1",
  //             product_name: 'Cheese pizza',
  //             product_detalies: "Cheese pizza ",
  //             product_image: images.pizza1,
  //             product_price: 0,
  //             product_total_price: 0,
  //             product_count: 1,
  //             product_choose_Addtion: "0",
  //             product_show: true,
  //             product_Addtion: [{ label: 'Ketchup', value: "100" }, { label: 'Cheese', value: "10" }, { label: 'Without', value: "1001" },],

  //             product_size: [{ title: "Small", Value: 25 }, { title: "medium", Value: 30 }, { title: "large", Value: 45 },],
  //             product_choose_size: "0",



  //           },
  //           {
  //             product_id: "2",
  //             product_name: 'Chicken pizza',
  //             product_detalies: "Chicken pizza ",
  //             product_image: images.pizza2,
  //             product_price: 150,
  //             product_total_price: 150,
  //             product_count: 1,
  //             product_choose_size: "0",
  //             product_show: true,
  //             product_size: [{ label: 'Small' }, { label: 'medium' }, { label: 'large' },]
  //           }
  //         ]

  //       },

  //       {
  //         itemes_name: "Chicken",
  //         itemes_image:images.checken,
  //         product: [
  //           {
  //             product_id: "1",
  //             product_name: 'Grilled chicken',
  //             product_detalies: "Grilled chicken ",
  //             product_image:images.checken1,
  //             product_price: 120.00,
  //             product_total_price: 120,
  //             product_count: 1,
  //             product_choose_size: "0",
  //             product_show: true,
  //             product_size: [{ label: 'Quarter' }, { label: 'Half' }, { label: 'chicken' },]
  //           },
  //           {
  //             product_id: "2",
  //             product_name: 'Chicken ',
  //             product_detalies: "Chicken dish with Vegatables ",
  //             product_image: images.checken,
  //             product_price: 150,
  //             product_total_price: 150,
  //             product_count: 1,
  //             product_choose_size: "0",
  //             product_show: true,
  //             product_size: [{ label: 'Quarter' }, { label: 'Half' }, { label: 'chicken' },]
  //           }
  //         ]
  //       }



  //     ]
  //   },















  //   {
  //     id: "2",
  //     name: "DRINKS",
  //     image: images.drink,

  //   },











  //   {
  //     id: "3",
  //     name: "DESSERTS",
  //     image: images.dessert,
  //   }

  // ])




  async function getsave() {
    let list = JSON.parse(await AsyncStorage.getItem("market"))
// alert(JSON.stringify(list.length))

    var count = 0

    if (Array.isArray(list) && list.length > 0) {

      for (let i = 0; i < list.length; i++) {

        count = count + list[i].Counter_one_item

      }
      setcount(count)


    } else {
      setcount(0)
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


  useEffect(()=>{
    getsave()
  },[])


  return (
    <>
      <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
      <View style={{
        flex: 1,
        backgroundColor: "#EAE9EA"
        // backgroundColor: "#f00",
      }}>
       
        <Animatable.View  animation={'fadeInLeftBig'} easing={'ease-in'}
        style={{
          flexDirection: "row",
          width: width,
          height: height * 0.07,
          backgroundColor: "#fff",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20

        }}>

          <View style={{
            width: width * 0.04,
            height: height * 0.07,

          }}>


          </View>


          <Text style={{ fontSize: scale(25), color: "rgb(255, 90, 0)", fontWeight: "bold", textAlign: "center", }}>𝑅𝐸𝑆𝑇𝐴𝑈𝑅𝐴𝑁𝑇</Text>


          <TouchableOpacity onPress={() => { navigation.navigate("Shopping") }}

            style={{
              // width: width * 0.07,
              // paddingHorizontal:3,
              height: height * 0.05,
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor:"#000",

            }}>
            {count ? (
              <View style={{
                width: width * 0.07,
                height: height * 0.037,
                backgroundColor: "rgb(255, 90, 0)",
                borderRadius: 7,
                justifyContent: "center",
                alignItems: "center"
              }}><Text style={{ fontSize: scale(16), fontWeight: "500", color: "#fff", }}>{count}</Text></View>
            ) : (null)}

          </TouchableOpacity>

        </Animatable.View>

        <FlatList data={order}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: "center",
            alignItems: "center"
          }}

          renderItem={({ item, index }) => (
            <Animatable.View  animation="fadeInUpBig" easing={'ease-in'}>
              <TouchableOpacity onPress={() => { navigation.navigate("OptionsFood", { item: item.itemes }) }}

                style={{
                  width: width * 0.9,
                  height: height * 0.22,
                  backgroundColor: "#ff0",
                  marginVertical: 10,
                  borderRadius: 20
                }}>
                <Image source={item.image} style={{ width: width * 0.9, height: height * 0.22, borderRadius: 20 }} resizeMode={"cover"} />
              </TouchableOpacity>

              <Text style={{ fontSize: scale(20), fontWeight: "500", color: "#000", textAlign: "center" }}>{item.name}</Text>



            </Animatable.View>

          )} />
        <View style={{
          height: height * 0.09, backgroundColor: "#f00", position: "absolute"
        }}></View>

      </View>
    </>
  )
}
export default Home;