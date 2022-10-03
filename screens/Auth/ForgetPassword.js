import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import { images } from '../../constant/index'
import * as Animatable from 'react-native-animatable';


import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('screen');
import { verticalScale, scale, moderateScale } from 'react-native-size-matters';


const ForgetPassword = ({ navigation }) => {
  const radio_props = [
    { label: 'رقم الهاتف', value: 0 },
    { label: 'البريد الالكتروني', value: 1 },
  ];
  const [choice, setChoice] = useState(0);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [check_phone, setCheck_Phone] = useState(true);
  const [check_email, setCheck_Email] = useState(true);

  const validatePhoneNumber = input_str => {
    let pho = /^01[0125][0-9]{8}$/gm;
    return pho.test(input_str);
  };

  const ValidEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const check_submit = () => {
    if (choice == 0) {
      validatePhoneNumber(phone) ? setCheck_Phone(true) : setCheck_Phone(false);
    } else {
      ValidEmail(email) ? setCheck_Email(true) : setCheck_Email(false);
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />
      <Animatable.View animation="fadeInRight" style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHeader}>
            <Text style={styles.text}>نسيت كلمة المرور</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.viewArrow}>
              <Image source={images.arrow_left} />
            </TouchableOpacity>
          </View>

          <RadioForm formHorizontal={true} animation={true}>
            {/* To create radio buttons, loop through your array of options */}
            <View style={styles.containerRadio}>
              {radio_props.map((obj, i) => (
                <RadioButton labelHorizontal={true} key={i}>
                  {/*  start RadioButtonLabel  */}
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={choice == i}
                    onPress={value => {
                      setChoice(value);
                    }}
                    borderWidth={2}
                    buttonInnerColor={styles.botton_radiobotton.color}
                    buttonOuterColor={styles.botton_radiobotton.color}
                    buttonSize={10}
                    buttonOuterSize={20}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    onPress={value => {
                      setChoice(value);
                    }}
                    labelStyle={styles.labelRadio}
                  />
                </RadioButton>
              ))}
            </View>
          </RadioForm>

          {/* end  RadioButtonLabel before RadioButtonInput */}

          {choice == 0 ? (
            <>
              {/* phone */}
              <View style={styles.ViewInput}>
                <View style={styles.inputStyle}>
                  <TextInput
                    placeholder="01087624658"
                    keyboardType="numeric"
                    value={phone}
                    onChangeText={value => {
                      setPhone(value);
                    }}
                    placeholderTextColor={styles.color_textInput.color}
                    style={styles.insideTextInput}
                  />
                </View>
                <View style={styles.container_icons}>
                  <Image source={images.call} />
                </View>
              </View>
              {check_phone ? (
                <Text style={{ color: styles.white.color }}> رقم الهاتف خطأ</Text>
              ) : (
                <Text style={styles.textError}>رقم الهاتف خطأ</Text>
              )}
              {/* phone */}
            </>
          ) : (
            <>
              {/* email */}

              <View style={styles.ViewInput}>
                <View style={styles.inputStyle}>
                  <TextInput
                    placeholder="user@gmail.com"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={value => {
                      setEmail(value);
                    }}
                    placeholderTextColor={styles.color_textInput.color}
                    style={styles.insideTextInput}
                  />
                </View>

                <View style={styles.container_icons}>
                  <Image source={images.mail} />
                </View>
              </View>
              {check_email ? (
                <Text style={{ color: styles.white.color }}>
                  البريد الالكتروني غير صحيح
                </Text>
              ) : (
                <Text style={styles.textError}>البريد الالكتروني غير صحيح</Text>
              )}
              {/* email */}
            </>
          )}

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              check_submit();
              navigation.navigate('CheckingPassword');
            }}>
            <Text style={styles.btnText}>ارسال</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </>
  );
};


const styles = StyleSheet.create({
  color_stutsBar: { color: '#fff' },
  bottn_back: { color: '#000' },
  color_textInput: { color: 'rgb(255, 90, 0)' },
  white: { color: '#fff' },
  botton_radiobotton: { color: 'rgb(255, 90, 0)' },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: RFValue(15),
    paddingTop: RFValue(25),
  },
  containerHeader: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  text: {
    width: '100%',
    color: '#000',
    fontSize: scale(20),
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  viewArrow: {
    width: width * 0.0888,
    height: width * 0.0888,
    backgroundColor: '#fff',
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
    marginRight: -width * 0.09,
  },
  text1: {
    color: 'rgb(255, 90, 0)',
    fontSize: scale(18),
    fontWeight: 'bold',
    marginTop: moderateScale(20),
  },
  containerRadio: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    marginTop: height * 0.08,
    marginHorizontal: RFValue(5),
  },
  labelRadio: {
    fontSize: scale(18) * 0.9,
    color: '#000',
    marginLeft: moderateScale(10),
  },
  ViewInput: {
    width: width * 0.9,
    height: height < 600 ? RFValue(55) : RFValue(45),
    backgroundColor: '#fff',
    borderRadius: RFValue(8),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    alignSelf: 'center',

    shadowOffset: {
      width: scale(10),
      height: verticalScale(10),
    },
    elevation: 5,
    marginTop: height * 0.12,
  },
  inputStyle: {
    width: width * 0.77,
    color: 'rgb(255, 90, 0)',
    fontSize: scale(18),
    justifyContent: 'center',
    paddingHorizontal: RFValue(3),
    borderBottomLeftRadius: RFValue(8),
  },
  insideTextInput: {
    color: 'rgb(255, 90, 0)',
    fontSize: RFPercentage(2.1),
    textAlign: 'right',
  },
  container_icons: {
    width: width * 0.13,
    height: height < 600 ? RFValue(50) : RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: RFValue(8),
    borderTopRightRadius: RFValue(8),
  },
  textError: {
    color: 'red',
    marginTop: moderateScale(10),
  },
  btn: {
    width: width * 0.9,
    height: height < 600 ? RFValue(48) : RFValue(37),
    backgroundColor: 'rgb(255, 90, 0)',
    borderRadius: RFValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(28),
    alignSelf: 'center',
  },

  btnText: {
    fontSize: scale(18) * 0.9,
    color: '#fff',
  },
});







export default ForgetPassword;
