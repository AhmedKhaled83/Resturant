import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Dialog from 'react-native-dialog';
import {images} from '../../constant/index'
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
const SignUp = ({navigation}) => {
  const [phone, setPhone] = useState('');

  const [pass, setPass] = useState('');

  const [name, setName] = useState('');

  const [checkPhone, setCheckPhone] = useState(false);

  const [Checkname, setCheckname] = useState(false);

  const [checkPassword, setCheckPassword] = useState(false);

  const [showPass, setShowPass] = useState(false);

  const isValidname = name => {
    const re = /^([a-zA-Z0-9\s_\u0600-\u06FF]).{0,30}$/;
    //  /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return re.test(String(name).toLowerCase());
  };

  // function Phone Number
  const validatePhoneNumber = phone => {
    let pho = /^01[0125][0-9]{8}$/gm;
    return pho.test(phone);
  };

  // function Password
  const ValidatePassword = password => {
    var pass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pass.test(password);
  };

  // function sigup

  const SignUp = () => {
    if (validatePhoneNumber(phone)) {
      setCheckPhone(false);

      if (isValidname(name)) {
        setCheckname(false);

        if (ValidatePassword(pass)) {
          setCheckPassword(false);
          navigation.navigate('TabStack',{screen:'HomeStack'})
        } else {
          setCheckPassword(true);
        }
      } else {
        setCheckname(true);
      }
    } else {
      setCheckPhone(true);
    }
  };

  const dialog_cancel_phone = () => {
    setCheckPhone(false);
  };

  const dialog_cancel_name = () => {
    setCheckname(false);
  };

  const dialog_cancel_password = () => {
    setCheckPassword(false);
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle={'dark-content'}
      />

      <Animatable.View animation="slideInRight" style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerHeader}>
            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.IconView}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign
                name="arrowright"
                size={16}
                color={styles.bottn_back.color}
              />
            </TouchableOpacity>
            <View style={styles.header}>
              <Text style={styles.text_header}>انشاء حساب جديد</Text>
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.WelcomeText}>مرحباً اهلاً بك</Text>

            <Text style={[styles.WelcomeText, , styles.heading2]}>
              رقم الهاتف
            </Text>

            {/* // phone  */}

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

            {/* // name user  */}

            <Text style={[styles.WelcomeText, styles.heading2]}>
              اسم المستخدم
            </Text>

            <View style={styles.ViewInput}>
              <View style={styles.inputStyle_userName}>
                <TextInput
                  placeholder=" الاسم"
                  keyboardType="name-phone-pad"
                  value={name}
                  onChangeText={value => {
                    setName(value);
                  }}
                  placeholderTextColor={styles.color_textInput.color}
                  style={styles.insideTextInput}
                />
              </View>
            </View>

            {/* // password  */}

            <Text style={[styles.WelcomeText, styles.heading2]}>كلمة السر</Text>

            <View style={styles.ViewInput}>
              <View style={styles.inputStyle}>
                <TextInput
                  placeholder="********"
                  value={pass}
                  onChangeText={value => {
                    setPass(value);
                  }}
                  placeholderTextColor={styles.color_textInput.color}
                  secureTextEntry={showPass}
                  style={styles.insideTextInput}
                />
              </View>
              <TouchableOpacity
                style={styles.container_icons}
                onPress={() => {
                  setShowPass(!showPass);
                }}>
                {showPass ? (
                  <Image source={images.eye_slash} />
                ) : (
                  <Image source={images.eye} />
                )}
              </TouchableOpacity>
            </View>

            {/* botton sign up */}

            <TouchableOpacity
              activeOpacity={0.4}
              style={styles.button}
              onPress={() => {
                SignUp();
               
              }}>
              <Text style={styles.buttonText}>انشاء حساب</Text>
            </TouchableOpacity>

            <Text style={styles.SocialText}>
              التسجيل بواسطه وسائل التواصل الاجتماعي
            </Text>

            <View style={styles.viewIcon}>
              <TouchableOpacity style={styles.container_soical_icons}>
                <Image source={images.facebook} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.container_soical_icons}>
                <Image source={images.google} />
              </TouchableOpacity>
            </View>

            <View style={styles.viewIconLogin}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={styles.textIcon}>تسجيل الدخول</Text>
              </TouchableOpacity>

              <Text style={[styles.textIcon, styles.textIconLogin]}>
                لدي حساب بالفعل
              </Text>
            </View>

            <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('TabStack',{screen:'HomeStack'})
            }}
            style={[styles.button, styles.btnVisitor]}>
              <Text style={[styles.btnText, styles.btnTextVisitor]}>
                تصفح كزائر
              </Text>
            </TouchableOpacity>
          </ScrollView>

          {/* // Errors */}

          {checkPhone == true ? (
            <View>
              <Dialog.Container visible={checkPhone}>
                <Dialog.Title>إنشاء حساب جديد </Dialog.Title>
                <Dialog.Description>
                  يوجد خطأ , يجيب الا يقل رقم الهاتف عن 11 رقم
                </Dialog.Description>
                <Dialog.Button label="Cancel" onPress={dialog_cancel_phone} />
              </Dialog.Container>
            </View>
          ) : Checkname == true ? (
            <View>
              <Dialog.Container visible={Checkname}>
                <Dialog.Title>إنشاء حساب جديد </Dialog.Title>
                <Dialog.Description>
                  يوجد خطأ , يجيب ان يكون الاسم مثل 'mono'
                </Dialog.Description>
                <Dialog.Button label="Cancel" onPress={dialog_cancel_name} />
              </Dialog.Container>
            </View>
          ) : checkPassword == true ? (
            <View>
              <Dialog.Container visible={checkPassword}>
                <Dialog.Title>إنشاء حساب جديد </Dialog.Title>
                <Dialog.Description>
                  يوجد خطأ , يجيب ان تحتوى كلمه السر علي ارقام و حروف و رموز مثل
                  'mono123#%'
                </Dialog.Description>
                <Dialog.Button
                  label="Cancel"
                  onPress={dialog_cancel_password}
                />
              </Dialog.Container>
            </View>
          ) : null}
        </ScrollView>
      </Animatable.View>
    </>
  );
};


const styles = StyleSheet.create({
    color_stutsBar: {color: '#fff'},
    color_textInput: {color: '#f00'},
    bottn_back: {color: '#000'},
  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: RFValue(15),
      paddingTop: RFValue(25),
    },
    containerHeader: {
      flexDirection: 'row',
      width: width,
      alignItems: 'center',
    },
    header: {
      width: width * 0.8,
      height: width * 0.0888,
      lineHeight: width * 0.1023,
      alignSelf: 'center',
      justifyContent: 'center',
    },
    heading2: {
      marginTop: RFValue(10),
      color: '#000',
    },
    text_header: {
      fontSize: scale(20),
      color: '#000',
      textAlign: 'center',
      fontWeight: 'bold',
      marginRight: RFValue(20),
    },
    IconView: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: width * 0.01111,
      width: width * 0.0888,
      height: width * 0.0888,
      backgroundColor: '#fff',
      marginRight: RFValue(2),
      borderRadius: RFValue(8),
      shadowOffset: {
        width: width * 0.0111,
        height: width * 0.0111,
      },
      elevation: width * 0.0166,
      flexDirection: 'row',
    },
    WelcomeText: {
      fontWeight: '400',
      fontSize: scale(16),
      color: 'rgb(255, 90, 0)',
      marginTop: RFValue(15),
      marginLeft: RFValue(15),
    },
    NameOfInput: {
      height: width * 0.07222,
      marginLeft: width * 0.7805,
      marginTop: -width * 0.028,
      fontSize: scale(14),
      fontWeight: '400',
      lineHeight: width * 0.07288,
      textAlign: 'left',
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
      color: '#f00',
      fontSize: scale(18),
      justifyContent: 'center',
      paddingHorizontal: RFValue(2.5),
      borderBottomLeftRadius: RFValue(8),
    },
    insideTextInput: {
      color: '#000',
      fontSize: RFPercentage(2),
      textAlign: 'right',
      marginLeft: RFValue(2),
    },
    inputStyle_userName: {
      width: width * 0.9,
      color: '#f00',
      fontSize: scale(18),
      justifyContent: 'center',
      paddingHorizontal: RFValue(10),
      borderRadius: RFValue(8),
    },
    container_icons: {
      width: width * 0.13,
      height: height < 600 ? RFValue(50) : RFValue(40),
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomRightRadius: RFValue(8),
      borderTopRightRadius: RFValue(8),
    },
    button: {
      width: width * 0.9,
      height: height < 600 ? RFValue(48) : RFValue(37),
      backgroundColor: 'rgb(255, 90, 0)',
      borderRadius: RFValue(8),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: RFValue(28),
      alignSelf: 'center',
    },
    btnVisitor: {
      backgroundColor: '#fff',
      borderColor: 'rgb(255, 90, 0)',
      borderWidth: moderateScale(1),
      marginTop: RFValue(35),
    },
    btnTextVisitor: {
      color: 'rgb(255, 90, 0)',
    },
    viewIconLogin: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: RFValue(15),
    },
    buttonText: {
      width: width * 0.1972,
      height: width * 0.0722,
      fontSize: scale(14),
      lineHeight: width * 0.0722,
      textAlign: 'right',
      color: '#fff',
      fontWeight: '500',
    },
    SocialText: {
      marginTop: width * 0.05,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: scale(12),
      lineHeight: width * 0.0527,
      textAlign: 'center',
      color: '#000',
      paddingHorizontal: RFValue(10),
    },
    viewIcon: {
      alignSelf: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      width: width * 0.32,
      // backgroundColor:"#f0f",
      justifyContent: 'space-between',
      marginTop: RFValue(25),
    },
    container_soical_icons: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      width: width * 0.13,
      height: height < 600 ? RFValue(40) : RFValue(30),
      shadowColor: '#000',
      borderRadius: RFValue(5),
      shadowOffset: {
        width: scale(10),
        height: verticalScale(10),
      },
      elevation: 0.5,
    },
    textIcon: {
      color: 'rgb(255, 90, 0)',
      textAlign: 'center',
      fontSize: scale(12),
      fontWeight: 'bold',
    },
    textIconLogin: {
      marginLeft: RFValue(13),
      color: '#000',
    },
  });
  




export default SignUp;
