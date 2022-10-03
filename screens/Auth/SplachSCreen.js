
import React, { useState, useEffect } from 'react';
import {View,StyleSheet , StatusBar} from 'react-native' ; 
import LottieView from 'lottie-react-native' ;

import { images } from '../../constant/index'


function SplaceScreen ({navigation}){
useEffect(()=>{
    let logic = 1 
    
    setTimeout(()=>{
      if (logic){
    navigation.navigate("Onboarding")
      }
    } , 5000)
 


},[])


return(
    <>

<StatusBar backgroundColor={"rgb(255,90,0)"} barStyle="light-content" />
    <View style={styles.View}>

    <LottieView source={images.splasch}
                        autoPlay={true}

                        loop={true}
                    />

    </View>
    
    
    
    </>
)


}

export default SplaceScreen;

const styles = StyleSheet.create({

    View:{
        flex : 1 ,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"rgb(255,90,0)"
    }



})
