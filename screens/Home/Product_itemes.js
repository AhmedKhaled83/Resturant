import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, StatusBar, FlatList, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('screen')
import { scale, } from 'react-native-size-matters';
function Product_itemes({ navigation, route }) {
  const [product, setproduct] = useState(route.params.product)
  return (
    <>
      <View style={{
        flex: 1,

      }}>
        <FlatList data={product}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: "center",
            alignItems: "center",

            // backgroundColor:"#ff0",


          }}

          renderItem={({ item, index }) => (



            <Animatable.View animation={'zoomInDown'}
             style={{
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
              margin: 10

            }}>
              <TouchableOpacity onPress={()=>{
                console.log(item)
                navigation.navigate("product_detalies",{ item:item})}}>
                <Image source={item.product_image} style={{ width: width * 0.42, height: height * 0.2, borderRadius: 20 }} resizeMode={"cover"} />
              </TouchableOpacity>

              <Text style={{ fontSize:scale(17), fontWeight: "500", color: "#000", textAlign: "center" }}>{item.product_name}</Text>



            </Animatable.View>

          )} />


      </View>
    </>
  )
}
export default Product_itemes;