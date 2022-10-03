import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';
import { images } from '../../constant/index'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';

const {height, width} = Dimensions.get('screen');



function NewPassword({navigation}) {
  const [password, setPassword] = useState('');
  const [Confirm_Password, setConfirm_Password] = useState('');
  const [security, setSecurity] = useState(true);
  const [Confirm_security, setConfirm_security] = useState(true);
  const [error_pass, setError_pass] = useState(false);

  const check_pass = () => {
    if (Confirm_Password != password) {
      setError_pass(true);
    } else {
      setError_pass(false);
      navigation.navigate('Login');
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />

      <Animatable.View
        animation="fadeInRight"
        style={styles.style_container_page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={styles.style_button_back}>
              <FontAwesome5
                name="arrow-left"
                size={scale(18)}
                color={styles.bottn_back.color}
                style={{alignSelf: 'center'}}
              />
            </TouchableOpacity>

            <Text style={styles.style_text_Enter_newpass}>
              ادخل كلمة سر جديدة
            </Text>
          </View>


          <Image
source={images.newpasss}
style={{
    width : width*0.8 ,
    height : RFValue(200),
  alignSelf:"center",

}}
resizeMode={"center"} 

/>


          <Text style={styles.pass_text}>كلمة السر</Text>

          <View style={styles.ViewInput}>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="● ● ● ● ● ● "
                value={password}
                onChangeText={value => {
                  setPassword(value);
                }}
                placeholderTextColor={styles.color_textInput.color}
                secureTextEntry={security}
                style={styles.insideTextInput}
              />
            </View>
            <TouchableOpacity
              style={styles.container_icons}
              onPress={() => {
                setSecurity(!security);
              }}>
              {security ? (
                <Image source={images.eye_slash} />
              ) : (
                <Image source={images.eye} />
              )}
            </TouchableOpacity>
          </View>

          <Text style={styles.pass_text}>تأكيد كلمة السر</Text>

          <View style={styles.ViewInput}>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="● ● ● ● ● ● "
                value={Confirm_Password}
                onChangeText={value => {
                  setConfirm_Password(value);
                }}
                placeholderTextColor={styles.color_textInput.color}
                secureTextEntry={security}
                style={styles.insideTextInput}
              />
            </View>
            <TouchableOpacity
              style={styles.container_icons}
              onPress={() => {
                setConfirm_security(!Confirm_security);
              }}>
              {Confirm_security ? (
                <Image source={images.eye_slash} />
              ) : (
                <Image source={images.eye} />
              )}
            </TouchableOpacity>
          </View>

          {error_pass ? (
            <Text style={styles.textError}>
              خطأ, من فضلك أعد كتابه كلمه السر بطريقه صحيحه
            </Text>
          ) : null}

          <TouchableOpacity
            onPress={() => {
              check_pass();
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
  color_stutsBar: {color: '#fff'},
  bottn_back: {color: '#000'},
  color_textInput: {color: 'rgb(255,90,0)'},
  container: {
    backgroundColor: '#fff',
    paddingTop: RFValue(25),
    flexDirection:"row",
    paddingHorizontal:scale(5)
  },
  style_container_page: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: RFValue(15),
  },
  // container: {
  //   alignSelf: "flex-start",
  //   marginTop: RFValue(25),
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },

  style_text_Enter_newpass: {
    fontSize: scale(20),
    fontWeight: '500',
    textAlign: 'center',
    color: 'rgb(255,90,0)',
    marginLeft: width * 0.15,
  },

  style_button_back: {
    width: width * 0.0888,
    height: width * 0.0888,
    backgroundColor: '#fff',
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
  style_container: {
    width: width * 0.9,
    paddingVertical: verticalScale(7),
    backgroundColor: '#fff',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    marginTop: height * 0.045,
    shadowColor: '#000',
    shadowRadius: moderateScale(10),
    shadowOpacity: 0.8,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: verticalScale(3),
    },
  },
  num_phone_securty: {
    fontSize:scale(18) * 0.9,
    color: '#000',
    textAlign: 'right',
    marginRight: moderateScale(5),
    marginTop: height * 0.0111,
    fontWeight: '500',
  },
  style_phone_eye: {
    width: width * 0.15,
    height: height * 0.1,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },

  text_style: {
    width: width * 0.75,
    height: height * 0.1,
    justifyContent: 'center',
  },

  style_container_confirm: {
    width: width * 0.9,
    height: height < 600 ? RFValue(48) : RFValue(37),
    backgroundColor: 'rgb(255,90,0)',
    borderRadius: RFValue(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RFValue(45),
    alignSelf: 'center',
  },
  style_text_confirm: {fontSize:scale(18), color: '#fff'},

  pass_text: {
    fontWeight: '400',
    fontSize: scale(16),
    marginTop: RFValue(25),
    color: '#000',
  },
  ViewInput: {
    width: width * 0.9,
    height: height < 600 ? RFValue(50) : RFValue(40),
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
    marginTop: height * 0.01,
  },
  inputStyle: {
    width: width * 0.77,
    color: 'rgb(255,90,0)',
    fontSize:scale(18),
    justifyContent: 'center',
    paddingHorizontal: RFValue(2.5),
    borderBottomLeftRadius: RFValue(8),
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
    fontSize: scale(16) * 0.9,
    color: 'red',
    textAlign: 'right',
    marginRight: width * 0.06,
    marginTop: RFValue(5),
  },
  insideTextInput: {
    color: '#000',
    fontSize: RFPercentage(2),
    textAlign: 'right',
    marginLeft: RFValue(2),
  },
});







export default NewPassword;
