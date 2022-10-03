


import React, { useState, useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, Dimensions, StatusBar, FlatList, ImageBackground, Image, ScrollView, StyleSheet, Animated, DevSettings } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import RadioButtonRN from 'radio-buttons-react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('screen')
import SelectDropdown from 'react-native-select-dropdown'
import { scale, moderateScale } from 'react-native-size-matters';



const Foods = ({ navigation, route }) => {

  const [product_detalies, setproduct_detalies] = useState(route.params.item)
  const [counter, setcounter] = useState(product_detalies.product_count * 1)
  const [product_choose_size, setproduct_choose_size] = useState(product_detalies.product_size[0].title)
  const [product_total_price, setproduct_total_price] = useState(product_detalies.product_total_price*1)

  // useEffect(()=>{alert(JSON.stringify(route.params.item))},[])


  const scrollY = useRef(new Animated.Value(0)).current;
  const Hight = height * 0.35



  const plusFun = () => {
    setcounter(counter => counter + 1)


  }




  const minusFun = () => {
    if (counter > 1) {
      setcounter(counter => counter - 1)
    }


  }


  useEffect(() => {
    // route.params.item.product_choose_size = route.params.item.product_size[0].title
    // alert( JSON.stringify(product_choose_size))

    setproduct_total_price(product_total_price =>product_detalies.product_size[0].Value )

    get_save()

    //  alert(JSON.stringify(counter))
    

  }, [])

  async function get_save() {
    let prodact = await AsyncStorage.getItem("market")

    console.log(JSON.stringify(prodact))

  }


  async function setSave_push() {
    let list = await AsyncStorage.getItem("market")

    let arr_product = [

    ]
    list = JSON.parse(list)
    
    if (list == null) {

      let opj = {
        id: product_detalies.product_id,
        image: product_detalies.product_image,
        name: product_detalies.product_name,
        product_detalies: product_detalies.product_detalies,
        Counter_one_item: counter,
        price: product_total_price,
        total_price: product_total_price* 1 * counter,
        counter_show: product_detalies.product_show,
        size: product_choose_size,
        size_prodact: product_detalies.product_size,
        product_Addtion: product_detalies.product_Addtion,
        // product_choose_Addtion:product_detalies.product_choose_Addtion,
        product_choose_Addtion:product_choose_Addtion,

      }
      arr_product.push(opj)
      await AsyncStorage.setItem("market", JSON.stringify(arr_product))

      // AsyncStorage.clear()
    } else {
      let last_product = list
      let opj = {
        id: product_detalies.product_id,
        image: product_detalies.product_image,
        name: product_detalies.product_name,
        product_detalies: product_detalies.product_detalies,
        Counter_one_item: counter,
        price: product_total_price,
        total_price: product_total_price* 1 * counter,
        counter_show: product_detalies.product_show,
        size: product_choose_size,
        size_prodact: product_detalies.product_size,
        product_Addtion: product_detalies.product_Addtion,
        // product_choose_Addtion:product_detalies.product_choose_Addtion,
        product_choose_Addtion:product_choose_Addtion,

      }
      last_product.push(opj)
      await AsyncStorage.setItem("market", JSON.stringify(last_product))
// alert(JSON.stringify(last_product))
      // AsyncStorage.clear()

    }

  }



var [product_choose_Addtion ,setproduct_choose_Addtion] = product_detalies.product_choose_Addtion  


  return (
    <>
      <StatusBar backgroundColor={"#EAE9EA"} barStyle="dark-content" animated={true} />


      <View style={[style.style_page]}>





        <Animated.ScrollView

          showsVerticalScrollIndicator={false}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } }
          ], { useNativeDriver: true })}



        >




          <Animatable.View animation={'slideInDown'}
          style={{ alignItems: "center", overflow: "hidden", marginTop: -1000, paddingTop: 1000 }}>

            <Animated.Image
              source={product_detalies.product_image}

              style={{
                width: "200%", height: Hight,
                transform: [
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [-Hight, 0, Hight],
                      outputRange: [-Hight / 2, 1, Hight * 0.75],
                     
                    })
                  },
                  {
                    scale: scrollY.interpolate({
                      inputRange: [-Hight, 0, Hight],
                      outputRange: [2, 1, 0.75],
                     

                    })
                  }
                ]


              }} resizeMode={"contain"} />

          </Animatable.View>





          <Text style={[style.style_detalies]}>{product_detalies.product_detalies}</Text>

          <Animatable.View animation={'fadeInLeftBig'}
           style={[style.style_price_count]}>

            <Text style={[style.style_total_price]}>EGP {product_total_price * 1 * counter}</Text>




            <View style={[style.style_plus_count_munis]}>


              <TouchableOpacity onPress={() => { minusFun() }} style={[style.style_plus_munis]}>

                <FontAwesome5 name='minus' color={"rgb(255, 90, 0)"} size={scale(17)} />

              </TouchableOpacity>


              <Text style={{ fontSize: scale(17), color: "#000" }}>{counter}</Text>


              <TouchableOpacity onPress={() => { plusFun() 
             
              
              }} style={[style.style_plus_munis]}>

                <FontAwesome5 name='plus' color={"rgb(255, 90, 0)"} size={scale(17)} />

              </TouchableOpacity>


            </View>

          </Animatable.View>







          <View style={[style.style_line]}></View>



          <Animatable.View animation={'fadeInRightBig'} 
          style={[style.style_background_size_addrion]} >


            <SelectDropdown
              data={product_detalies.product_size}

              onSelect={(selectedItem, index) => {
                
                setproduct_choose_size(selectedItem.title)
                setproduct_total_price(selectedItem.Value)
              

              }}

              defaultButtonText={product_choose_size}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title + "    " + item.Value + "  EGP";

              }}


              buttonStyle={style.dropdown_botton_style}

              buttonTextStyle={{ color: 'rgb(255, 90, 0)', textAlign: 'left' }}

              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={scale(18)} />;
              }}
              dropdownIconPosition={'right'}

              dropdownStyle={style.style_dropdown}


            />


          </Animatable.View>







          <Animatable.View animation={'fadeInLeftBig'}
           style={[style.style_background_radio_button]}>

{product_detalies.product_Addtion.length>0?
            <Text style={[style.style_text_addtion]}>Your Choice 1st Addtion</Text>
            :
            null}


            
          <RadioButtonRN
            data={product_detalies.product_Addtion}
      
            selectedBtn={(e) => {
             
              product_choose_Addtion = e.label
              // console.log(product_choose_Addtion )
       
         
              
            }}


              animationTypes={['pulse']}
              circleSize={scale(18)}

              icon={<View style={[style.style_radio_button_icon]}><FontAwesome5 name='check' size={scale(15)} color={"#fff"} /></View>}

              boxStyle={[style.radio_button_boxStyle]}

              textStyle={{ fontSize: scale(13), marginHorizontal: 15, color: "#000" }}


            />

          </Animatable.View>


          <View style={[style.style_line]}></View>



          <TouchableOpacity onPress={() => { setSave_push() }}
            style={[style.backgroundColor_addbasket]}>

            <View style={{ width: width * 0.5, height: style.backgroundColor_addbasket.height, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

              {counter > 1 ? (
                <View style={{
                  width: width * 0.09,
                  height: height * 0.041,
                  backgroundColor: "#FF772C",
                  borderRadius: moderateScale(7),
                  justifyContent: "center",
                  alignItems: "center"
                }}><Text style={{ fontSize: scale(16), fontWeight: "500", color: "#fff" }}>{counter}</Text></View>) : (null)}

              <Text style={{ fontSize: scale(17.5), fontWeight: "400", color: "#fff" }}> Add to basket</Text>
            </View>

            <Text style={{ fontSize: scale(17), fontWeight: "400", color: "#fff" }}>EGP {(product_total_price) * 1 * counter} </Text>

          </TouchableOpacity>
        
        </Animated.ScrollView>



        <TouchableOpacity onPress={() => { navigation.goBack() }}
          style={{
            position: "absolute",
            marginTop: height * 0.01,
            marginHorizontal: 8,
            alignItems: "center",
            justifyContent: "center",
            height: 30,
            width: 30,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#fff",
            backgroundColor: "rgb(255, 90, 0)",

          }}

        >
          <FontAwesome5 name='angle-left' color={"#fff"} size={20} />
        </TouchableOpacity>


      </View>
    </>
  )
}
export default Foods;

const style = StyleSheet.create({

  style_page: {
    flex: 1,
    backgroundColor: "#EAE9EA"
  },
  style_image: {
    width: width,
    height: height * 0.35,
    backgroundColor: "#ff0",

  },
  style_background_cancel: {
    width: width * 0.1,
    height: height * 0.05,
    backgroundColor: "#fff",
    borderRadius: 50,
    marginTop: -height * 0.32,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5
  },

  style_cancel: { fontSize: scale(20), fontWeight: "500", color: "#fff" },

  style_detalies: { fontSize: scale(20), fontWeight: "bold", color: "#000", marginTop: 20, paddingHorizontal: 10 },

  style_price_count: {
    flexDirection: "row",
    width: width,
    height: height * 0.07,
    //  backgroundColor:"#f0f",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15
  },

  style_total_price: { fontSize: scale(18), fontWeight: "500", color: "#000", },


  style_plus_count_munis: {
    flexDirection: "row",
    width: width * 0.321,
    height: height * 0.045,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  style_plus_munis: {
    width: width * 0.08,
    height: height * 0.045,
    // backgroundColor:"#f00",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },

  style_line: { width: width, height: height * 0.015, backgroundColor: "#fff" },


  style_background_size_addrion: {
    width: width * 0.5,
    height: height * 0.07,
    alignSelf: "flex-end",
    marginHorizontal: 20,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",

  },


  dropdown_botton_style: {

    width: width * 0.5,
    height: height * 0.06,
    backgroundColor: '#FFF',
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: 'rgb(255, 90, 0)',
  },
  style_dropdown: {
    backgroundColor: '#ffF',
    borderRadius: moderateScale(15),
    padding: 5
  },
  style_background_radio_button: {
    width: width,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  style_text_addtion: {
    fontSize: scale(18),
    fontWeight: "500",
    color: "#000",
    alignSelf: "flex-start",
    paddingHorizontal: height * 0.035
  },
  style_radio_button_icon: {
    backgroundColor: "rgb(255, 90, 0)",
    width: scale(22),
    height: scale(22),
    borderRadius: scale(11),
    justifyContent: "center",
    alignItems: "center"
  },
  radio_button_boxStyle: {

    //    marginTop:20,
    borderRadius: moderateScale(15),
    width: width * 0.9,
    // height:verticalScale( height * 0.1),

    backgroundColor: "#fff",
    alignSelf: "center",
    borderWidth: 0,
    outerCircleColor: 'gray',


  },
  backgroundColor_addbasket: {
    flexDirection: "row",
    width: width * 0.93,
    height: height * 0.0577,
    backgroundColor: "rgb(255, 90, 0)",
    borderRadius: moderateScale(8),
    alignSelf: "center",
    marginVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
  }
})