import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StatusBar,StyleSheet
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import { images } from '../../constant/index'
const {width , height} = Dimensions.get('screen');


import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';



const slides = [
  {
    id: '1',
    subtitle: 'يوجد الكثير من الوجبات والاصناف المختلفه ',
    title: ' أختر وجبتك !',
    image: images.onbording3,
  },
  {
    id: '2',
    image:  images.onbording1,
    title: 'طبقك المفضل',
    subtitle: 'سوف تجد اطباق كثيره',
  },
  {
    id: '3',
    image:  images.onbording2,
    title: 'تقسيمه الوجبات',
    subtitle: 'هناك تقسيمه مميزه للوجبات',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.containerSlide}>
        <Image
          source={item?.image}
          style={styles.imgSlide}
          resizeMode={'contain'}
        />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const Footer = () => {
    return (
      <View style={styles.containerFooter}>
        {/* Indicator container */}
        <View style={styles.viewPoint}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: styles.Color_VisPoint.color,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View>
          {currentSlideIndex == slides.length - 1 ? (
            <View>
              <TouchableOpacity
                style={[styles.btnContinue, styles.btnContinueUp]}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                <Text style={styles.textBtnContinue}>استمر</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btnContinue}
                onPress={goToNextSlide}>
                <Text style={styles.textBtnContinue}>استمرار</Text>
              </TouchableOpacity>
              <View />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate('Login');
                }}
                style={styles.btnSkip}>
                <Text style={styles.textBtnSkip}>تخطى</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar
        backgroundColor={styles.color_stutsBar.color}
        barStyle="dark-content"
      />
      <Animatable.View animation="fadeInDownBig" style={styles.animatedView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            contentContainerStyle={styles.flatList}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={slides}
            pagingEnabled
            renderItem={({item}) => <Slide item={item} />}
          />
          <Footer />
        </ScrollView>
      </Animatable.View>
    </>
  );
};



const styles = StyleSheet.create({
  color_stutsBar: {color: '#fff'},

  Color_VisPoint: {color: '#ff0'},

  containerSlide: {
    width: width,
    height: RFValue(311),
    backgroundColor: '#fff',
    marginTop: RFValue(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imgSlide: {
    width,
    height: RFValue(311),
  },
  containerFooter: {
    height: height * 0.2,
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    marginBottom: verticalScale(15),
    backgroundColor: '#fff',
  },
  viewPoint: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(15),
  },
  subtitle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize:scale(16),
    lineHeight: width * 0.0833,
    textAlign: 'center',
    color: 'rgb(255,90,0)',
  },
  title: {
    fontSize: scale(16),
    color: 'rgb(255,90,0)',
    fontWeight: '400',
    lineHeight: width * 0.1249,
    textAlign: 'center',
  },
  indicator: {
    height: scale(12) * 0.9,
    width: scale(12) * 0.9,
    backgroundColor: 'rgb(255,90,0)',
    marginHorizontal: 3,
    borderRadius: scale(5),
  },
  btnContinue: {
    width: width * 0.9,
    height: height < 600 ? RFValue(45) : RFValue(42),
    marginVertical: verticalScale(5),
    borderRadius: scale(8),
    backgroundColor: 'rgb(255,90,0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContinueUp: {
    marginTop: -verticalScale(95),
  },
  textBtnContinue: {
    fontWeight: 'bold',
    fontSize:scale(16),
    color: '#fff',
  },
  btnSkip: {
    width: width * 0.9,
    height: height < 600 ? RFValue(45) : RFValue(42),
    marginVertical: verticalScale(5),
    borderRadius: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(255,90,0)',
  },
  textBtnSkip: {
    fontWeight: 'bold',
    fontSize:scale(16),
    color: 'rgb(255,90,0)',
  },
  animatedView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatList: {
    height: height * 0.6,
    backgroundColor: '#fff',
  },
});








export default Onboarding;
