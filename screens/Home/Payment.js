import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Dimensions, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import LottieView from 'lottie-react-native'

const { width, height } = Dimensions.get('screen')


function Cart2({ navigation, route }) {




    const [cost, setcost] = useState(0);

    const [smallok, setsmallok] = useState(1);

    const [smallcancle, setsmallcancle] = useState(1);


    const [largeok, setlargeok] = useState(0);

    const [largecancle, setlargecancle] = useState(0);


    var [ paymentbackgroundColor , setpaymentbackgroundColor] = useState('rgb(255, 90, 0)')


    useFocusEffect(
        React.useCallback(() => {
            getsave()


            return () => {
                Funcost()

            };
        }, [])
    );
    setTimeout(() => { Funcost() }, 100)




    const Funcost = () => {
        let cost = 0
        for (let i = 0; i < itemes.length; i++) {

            cost += itemes[i].total_price

        }

        setcost(cost)
    }






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





    return (
        <>
            <StatusBar backgroundColor={paymentbackgroundColor} barStyle="light-content" />

            <View style={{
                flex: 1,
                backgroundColor: "#EAE9EA",


            }}>


                <ScrollView>

                    <View style={styles.style_page}>
                        <Text style={styles.style_text}>الفاتوره</Text>

                        <View style={[styles.style_Head_View,{backgroundColor:paymentbackgroundColor}]}>

                            {/* name prodact */}
                            <View style={styles.style_Name_View}>

                                <Text style={styles.style_name_text}>Name Prodact</Text>

                            </View>



                            {/* Size */}
                            <View style={[styles.style_Name_View, { width: width * 0.13, }]}>

                                <Text style={styles.style_name_text}>Size</Text>

                            </View>



                            {/* Counte */}

                            <View style={[styles.style_Name_View, { width: width * 0.18, }]}>
                                <Text style={styles.style_name_text}>Count</Text>
                            </View>


                            {/* Price */}
                            <View style={[styles.style_Name_View, { width: width * 0.29, }]}>

                                <Text style={styles.style_name_text}>Price L.E</Text>

                            </View>

                        </View>



                        {/* FlatList */}

                        <View style={{ width: width }}>
                            <FlatList data={itemes}


                                renderItem={({ item, index }) => (

                                    <View style={styles.style_Flat_head}>

                                        {/* name prodact */}
                                        <View style={styles.style_Name_View}>
                                            <Text style={styles.style_Flat_text}>{item.name}</Text>
                                        </View>


                                        {/* Size */}
                                        <View style={[styles.style_Name_View, { width: width * 0.13 }]}>
                                            <Text style={styles.style_Flat_text}>{item.size}</Text>
                                        </View>

                                        {/* Counte */}

                                        <View style={[styles.style_Name_View, { width: width * 0.18 }]}>
                                            <Text style={styles.style_Flat_text}>{item.Counter_one_item}</Text>
                                        </View>


                                        {/* Price */}
                                        <View style={[styles.style_Name_View, { width: width * 0.29 }]}>
                                            <Text style={styles.style_Flat_text}>{item.total_price}</Text>
                                        </View>
                                    </View>






                                )} />
                        </View>


                        <View style={[styles.style_Price_View,{backgroundColor:paymentbackgroundColor}]}>
                            <Text style={styles.style_price_text_1}> Total Price $: </Text>
                            <Text style={styles.style_price_text_2}> {cost}</Text>

                        </View>


                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }} >


                            {smallcancle ? (
                                <TouchableOpacity style={styles.style_emphasis}
                                    onPress={() => {
                                        setsmallcancle(0)
                                        setsmallok(0)
                                        setlargecancle(1)
                                        setpaymentbackgroundColor("#f00")
                                    }}

                                >
                                    <Text style={{ fontSize: 17, color: "#fff" }}> الغاء </Text>


                                </TouchableOpacity>

                            ) : (null)}

                            {largecancle ? (
                                <TouchableOpacity
                                    style={[styles.style_emphasis, { width: width * 0.7, alignSelf: "center" }]}>
                                    <Text style={{ fontSize: 17, color: "#fff" }}> تم الغاء الطلب بنجاح </Text>


                                </TouchableOpacity>) :
                                (null)
                            }





                            {smallok ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        setsmallcancle(0)
                                        setsmallok(0)
                                        setlargeok(1)
                                        setpaymentbackgroundColor("green")
                                    }}

                                    style={[styles.style_emphasis, { backgroundColor: "green" }]}>
                                    <Text style={{ fontSize: 17, color: "#fff" }}> تأكيد </Text>


                                </TouchableOpacity>

                            ) : (null)}

                            {largeok ? (
                                <TouchableOpacity
                                    style={[styles.style_emphasis, { width: width * 0.7, alignSelf: "center", backgroundColor: "green" }]}>
                                    <Text style={{ fontSize: 17, color: "#fff" }}> تم تاكيد الطلب بنجاح </Text>


                                </TouchableOpacity>) :
                                (null)
                            }





                        </View>



                    </View>

                </ScrollView>













            </View>
        </>
    )
}
export default Cart2;


const styles = StyleSheet.create({


    style_page: {
        width: width,
        height: height,
        backgroundColor: "#fff"

    },
    style_text: {
        fontSize: 25,
        color: "#000",
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: height * 0.02
    },
    style_Head_View: {
        width: width * 0.94,
        height: height * 0.045,
        // backgroundColor: paymentbackgroundColor,
        marginTop: height * 0.04,
        alignSelf: "center",
        flexDirection: "row"
    },
    style_Name_View: {
        width: width * 0.34,
        height: height * 0.045,
        // backgroundColor: "#f00",
        justifyContent: "center",
        alignItems: 'center'

    },
    style_name_text: {
        fontSize: 15,
        color: "#fff"
    },
    style_Flat_head: {
        width: width * 0.94,
        height: height * 0.047,
        //  backgroundColor: "#f0f",
        borderBottomWidth: 0.8,
        borderBottomColor: "#000",
        alignSelf: "center",
        flexDirection: "row",
        // marginTop:10
    },
    style_Flat_text: {
        fontSize: 15,
        color: "#000"
    },
    style_Price_View: {
        flexDirection: "row",
        width: width * 0.5,
        height: height * 0.045,
        // backgroundColor: "rgb(255, 2, 0)",
        alignSelf: 'flex-end',
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: height * 0.05
    },
    style_price_text_1: {
        fontSize: 18,
        color: "#000",
        fontWeight: "500"
    },


    style_price_text_2: {
        fontSize: 18,
        color: "#fff"
    },
    style_data_null: {
        width: width,
        height: height,
        justifyContent: "center", alignItems: "center",
        backgroundColor: "#fff",

    },
    style_lottieView: { width: width * 0.8, height: height * 0.5, },
    style_emphasis: {
        width: width * 0.3,
        height: height * 0.04,
        backgroundColor: "#f00",
        justifyContent: "center",
        alignItems: "center"
    }

})