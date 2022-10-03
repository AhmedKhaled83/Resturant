import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
// import {scale} from 'react-native-size-matters';
import CountDownTimer from 'react-native-countdown-timer-hooks';
import * as Animatable from 'react-native-animatable';

import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import { images } from '../../constant/index'

const {height, width} = Dimensions.get('screen');

const CELL_COUNT = 4;

function CheckingPassword({navigation}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const refTimer = useRef();
  const [timerEnd, setTimerEnd] = useState(true);
  const [time_send, settime_send] = useState(120);

  const timerCallbackFunc = timerEnd => {
    setTimerEnd(!timerEnd);
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />

      <Animatable.View animation="fadeInRight" style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.style_container_border}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.style_button_back}>
              <FontAwesome5
                name="arrow-left"
                size={scale(18)}
                color={styles.bottn_back.color}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>

            <Text style={styles.style_text_check}>التحقيق</Text>
          </View>

<Image
source={images.confirmation}
style={{
    width : width*0.8 ,
    height : RFValue(200),
  alignSelf:"center",

}}
resizeMode={"center"} 

/>



          <Text style={styles.style_text_message}>
            لقد ارسلنا لك الكود, قم بإدخال الكود المرسل اليك للتاأكيد من بيانتك
          </Text>

          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />

          <View style={styles.style_container_text_returnSend}>
            {timerEnd ? (
              <CountDownTimer
                ref={refTimer}
                timestamp={time_send}
                timerCallback={timerCallbackFunc}
                containerStyle={styles.countDown}
                textStyle={styles.style_time}
              />
            ) : (
              <Text style={styles.style_time}>0:00</Text>
            )}

            <Text style={styles.style_text_returnSend}>اعاده ارسال الكود</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NewPassword');
            }}
            style={styles.style_container_confirm}>
            <Text style={styles.style_text_confirm}> تأكيد </Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </>
  );
}

const styles = StyleSheet.create({
    color_stutsBar: {color:'#fff'},
    bottn_back: {color: '#000'},
    color_textInput: {color: 'rgb(255,90,0)'},
    container: {
      flex: 1,
      backgroundColor:'#fff',
      paddingTop: RFValue(25),
    },
    style_container_border: {
      flexDirection: 'row',
      width: width,
      height: height * 0.06,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    style_text_check: {
      fontSize: scale(20),
      fontWeight: '500',
      color: '#000',
      marginLeft: width * 0.2,
    },
  
    style_button_back: {
      width: width * 0.0888,
      height: width * 0.0888,
      backgroundColor:'#fff',
      marginHorizontal: width * 0.07,
      padding: width * 0.01111,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: RFValue(8),
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: verticalScale(20),
      },
      shadowOpacity: 0.25,
      shadowRadius: 0,
  
      elevation: 5,
    },
  
    style_text_message: {
      fontSize: scale(18),
      color: '#000',
      textAlign: 'center',
      paddingHorizontal: width * 0.1,
      marginTop: height * 0.04,
    },
    countDown: {
      width: width * 0.15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#fff',
    },
  
    style_container_text_returnSend: {
      flexDirection: 'row',
      margin: moderateScale(15),
      padding: 2,
      alignSelf: 'flex-end',
    },
  
    style_text_returnSend: {fontSize: scale(17), color: '#000'},
  
    style_time: {
      fontSize: scale(15),
      color: '#000',
      fontWeight: '500',
      letterSpacing: 0.25,
    },
  
    codeFieldRoot: {
      marginTop: RFValue(30),
      width: width * 0.9,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cell: {
      width: width * 0.13,
      height: height < 600 ? RFValue(55) : RFValue(42),
      marginHorizontal: moderateScale(5),
      backgroundColor:'#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: verticalScale(20),
      },
      shadowOpacity: 0.25,
      shadowRadius: 0,
      color: '#000',
      elevation: 5,
      lineHeight: 38,
      fontSize: scale(24),
      borderWidth: 2,
      borderColor:'#fff',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    focusCell: {
      borderColor: 'rgb(255,90,0)',
    },
  
    style_container_confirm: {
      width: width * 0.9,
      height: height < 600 ? RFValue(48) : RFValue(37),
      backgroundColor: 'rgb(255,90,0)',
      borderRadius: RFValue(8),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: RFValue(28),
      alignSelf: 'center',
    },
    style_text_confirm: {fontSize: scale(18), color:'#fff'},
  });
  
  




export default CheckingPassword;
