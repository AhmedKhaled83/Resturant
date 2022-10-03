import React, {useState} from 'react';
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
import * as Animatable from 'react-native-animatable';
import Dialog from 'react-native-dialog';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import {images} from '../../constant/index'
const {height, width} = Dimensions.get('screen');

const Login = ({navigation}) => {

  const [phone, setPhone] = useState('');

  const [password, setPassword] = useState('');

  const [secure, setSecure] = useState(true);

  const [Error, setError] = useState(false);

  // function PhoneNumber
  const validatePhoneNumber = phone => {
    var pho = /^01[0125][0-9]{8}$/gm;
    return pho.test(phone);
  };

  // function PassWord
  const ValidatePassword = password => {
    var pass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pass.test(password);
  };

  // function Login in app
  const LoginApp =  () => {
    navigation.navigate('TabStack',{screen:'HomeStack'})
  };

  // function check

  const check_login = async () => {
    const validation = validatePhoneNumber(phone) && ValidatePassword(password);
    validation ? LoginApp() : setError(true);
  };

  const dialog_cancel = () => {
    setError(false);
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />
      <Animatable.View animation="slideInLeft" style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>تسجيل الدخول</Text>

          <Text style={styles.heading2}> أهلا بعودتك </Text>

          <Text style={[styles.heading2, {color: styles.bottn_back.color}]}>
            رقم الهاتف
          </Text>

          {/* start TextInput  */}

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
          {/* end TextInput  */}

          <Text style={[styles.heading2, {color: styles.bottn_back.color}]}>
            كلمة السر
          </Text>
          {/* start textInput */}
          <View style={styles.ViewInput}>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="********"
                value={password}
                onChangeText={value => {
                  setPassword(value);
                }}
                placeholderTextColor={styles.color_textInput.color}
                // dataDetectorTypes={'phoneNumber'}
                secureTextEntry={secure}
                style={styles.insideTextInput}
              />
            </View>
            <TouchableOpacity
              style={styles.container_icons}
              onPress={() => {
                setSecure(!secure);
              }}>
              {secure ? (
                <Image source={images.eye_slash} />
              ) : (
                <Image source={images.eye} />
              )}
            </TouchableOpacity>
          </View>
          {/* end textInput */}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgetPassword');
            }}>
            <Text style={styles.textError}>نسيت كلمة السر</Text>
          </TouchableOpacity>

          {/* {Error ? (null) : ( */}

          <Dialog.Container visible={Error}>
            <Dialog.Title>تسجيل الدخول</Dialog.Title>
            <Dialog.Description>
              يوجد خطأ , الرجاء التاكد من صحه رقم الهاتف و كلمه السر
            </Dialog.Description>
            <Dialog.Button label="Cancel" onPress={dialog_cancel} />
          </Dialog.Container>

          {/* )} */}

          {/* login */}

          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              check_login();
            //   navigation.navigate('TabStack',{screen:'HomeStack'})
            }}>
            <Text style={styles.btnTextLogin}>تسجيل الدخول</Text>
          </TouchableOpacity>

          {/* login */}

          <Text style={[styles.social]}>
            التسجيل بواسطة وصائل التواصل الاجتماعي
          </Text>

          {/* icons facebook and google */}

          <View style={styles.viewIcon}>
            <TouchableOpacity style={styles.container_soical_icons}>
              <Image source={images.facebook} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.container_soical_icons}>
              <Image source={images.google} />
            </TouchableOpacity>
          </View>

          <View style={styles.foundOrNot}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.textNotFound}>ليس لدي حساب</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
             
              }}>
              <Text style={[styles.textFound]}>انشاء حساب</Text>
            </TouchableOpacity>
          </View>

          {/* icons facebook and google */}

          <TouchableOpacity
            style={[styles.btn, styles.btnVisitor]}
            onPress={() => {navigation.navigate('TabStack',{screen:'HomeStack'})}}>
            <Text style={styles.btnTextVisitor}>تصفح كزائر</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animatable.View>
    </>
  );
};

const styles = StyleSheet.create({
    color_stutsBar: {color: "#fff"},
    bottn_back: {color:'#000'},
    color_textInput: {color: 'rgb(255, 90, 0)'},
  
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: RFValue(15),
    },
    heading: {
      color: 'rgb(255, 90, 0)',
      fontSize:scale(20),
      fontWeight: 'bold',
      textAlign: 'center',
      alignSelf: 'center',
    },
    heading2: {
      color: "rgb(255, 90, 0)",
      fontSize: scale(18),
      fontWeight: '500',
      marginTop: RFValue(15),
    },
  
    ViewInput: {
      width: width * 0.9,
      height: height < 600 ? RFValue(50) : RFValue(40),
      backgroundColor:'#fff',
      borderRadius: RFValue(8),
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#1C1C1C',
      shadowOpacity: 0.5,
      alignSelf: 'center',
  
      shadowOffset: {
        width: scale(10),
        height: verticalScale(10),
      },
      elevation: 5,
      marginTop: height * 0.02,
    },
    insideTextInput: {
      color:'#000',
      fontSize: RFPercentage(2),
      textAlign: 'right',
      marginLeft: RFValue(2),
    },
    inputStyle: {
      width: width * 0.77,
      color: 'rgb(255, 90, 0)',
      fontSize: scale(18),
      justifyContent: 'center',
      paddingHorizontal: RFValue(2.5),
      borderBottomLeftRadius: RFValue(8),
      borderTopLeftRadius: RFValue(8),
    },
    container_icons: {
      width: width * 0.13,
      height: height < 600 ? RFValue(50) : RFValue(40),
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomRightRadius: RFValue(8),
      borderTopRightRadius: RFValue(8),
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
    social: {
      color:'rgb(255, 90, 0)',
      textAlign: 'center',
      fontSize: scale(14),
      marginTop: RFValue(30),
    },
    viewIcon: {
      alignSelf: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      width: width * 0.32,
      justifyContent: 'space-between',
      marginTop: RFValue(40),
    },
    container_soical_icons: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#fff',
      width: width * 0.13,
      height: height < 600 ? RFValue(40) : RFValue(30),
      shadowColor: '#1C1C1C',
      borderRadius: RFValue(5),
      shadowOffset: {
        width: scale(10),
        height: verticalScale(10),
      },
      elevation: 0.5,
    },
    foundOrNot: {
      backgroundColor:'#fff',
      flexDirection: 'row',
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: RFValue(15),
    },
    textNotFound: {
      color: '#1C1C1C',
      textAlign: 'center',
      fontSize: scale(12),
      fontWeight: 'bold',
    },
    textFound: {
      textAlign: 'center',
      fontSize: scale(12),
      fontWeight: 'bold',
      color: 'rgb(255, 90, 0)',
      marginLeft: RFValue(13),
    },
    btnTextLogin: {
      fontSize: scale(18) * 0.9,
      color:'#fff',
    },
    btnTextVisitor: {
      fontSize: scale(16),
      color: 'rgb(255, 90, 0)',
    },
    btnVisitor: {
      backgroundColor:'#fff',
      borderColor: 'rgb(255, 90, 0)',
      borderWidth: moderateScale(1),
      marginTop: RFValue(35),
    },
    textError: {
      color:'#000',
      textAlign: 'right',
      fontSize: scale(14),
      fontWeight: 'bold',
      marginTop: RFValue(15),
    },
  });
  

export default Login;
