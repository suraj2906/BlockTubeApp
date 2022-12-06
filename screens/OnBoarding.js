import React from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native'
import BlockTubeLogo from '../assets/pictures/BlockTubeLogo.svg'
import FlatButton from '@core/Button';
import LinearGradient from 'react-native-linear-gradient';
import MyCarousel from '../components/MyCarousel'
import { Carousel } from 'react-native-snap-carousel';
import data from '../assets/data/slides'
import { useState } from 'react';


const _renderItem = ({item, index}) => {
  return(
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  )
}


const OnBoarding = ({ navigation }) => {

  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <>
      <View style = {styles.bg}>
        <View>
          <LinearGradient style={styles.grad1} colors={['#00a3ff75', '#11ddc475']}  
          useAngle= {true}
          angle = {103}
          angleCenter = {{x: 0.5, y: 0.5}}
          locations={[0.3942, 0.7583]}>
            <TouchableOpacity onPress = {() => {navigation.navigate("SignUp")}}>
              <Text style={styles.grad1Text}>Skip All</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text style={styles.normalText}>Welcome to</Text>
          <Text style={styles.BT}>BlockTube</Text>
          
        </View>
        <View style={styles.logo}>
          <BlockTubeLogo style={styles.image}/>
          <View style={styles.wc}>
            <LinearGradient style={[styles.grad1, styles.grad2]} colors={['#1950b9d9', '#1a4dac75']}  
            useAngle= {true}
            angle = {146.66}
            angleCenter = {{x: 0.5, y: 0.5}}
            locations={[0.3942, 0.7583]}>
                <Text style = {[styles.grad1Text, styles.grad2Text]}>{slideIndex + 1} Of 3</Text>
            </LinearGradient>
            <View style={styles.container}>
              <Carousel
              data={data}
              renderItem={_renderItem}
              sliderWidth={Dimensions.get("screen").width}
              itemWidth={500}
              ref={(c) => { this._carousel = c; }}
            />
            </View>
            </View>
            
            

            <View style={styles.circles}>
              <View style={[styles.circle, slideIndex == 0 ? styles.active : styles.circle]}></View> 
              <View style={[styles.circle, slideIndex == 1 ? styles.active : styles.circle]}></View> 
              <View style={[styles.circle, slideIndex == 2 ? styles.active : styles.circle]}></View>
            </View>
          
        </View>
        <FlatButton title = {slideIndex == 2 ? "Continue" : "Next"} onPress = {() => {slideIndex == 2 ? navigation.navigate('SignUp') : this._carousel.snapToNext(); setSlideIndex(this._carousel.currentIndex);}}/>
      </View>


    </>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    padding: "5%",
  },



  normalText: {
    color: "white",
    fontFamily: "Kanit-ExtraLight",
    fontSize: 36,
  
  },

  BT: {
    color: "white",
    fontFamily: "Kanit-Bold",
    fontSize: 48,
   
  },

  logo: {
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    textAlign: "right"
  },


  subtitle: {
    color: "white",
    fontFamily: "Kanit-ExtraLight",
    fontSize: 24,  
    marginTop: "8%"
  },

  description: {
    color: "white",
    fontFamily: "Kanit-ExtraLight",
    fontSize: 14,
    marginTop: "5%"
  },

  wc: {
    alignItems: "flex-start",
    marginTop: "25%",
    height: "35%"
  },


  button: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderRadius: 17,
    fontFamily: "Kanit-Bold",
    width: "70%"
  },

  grad1: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    justifyContent: "center",
    fontSize: 20,
    right: 0,
    top: -10,
    borderRadius: 10,
    alignSelf: "flex-end",
  },

  grad1Text: {
    fontSize: 14,
    fontFamily: "Kanit-ExtraLight",
    fontWeight: "275",
  },

  grad2Text: {
    fontSize: 12,
  },

  title: {
    color: "white",
    fontFamily: "Kanit-ExtraLight",
    fontSize: 24,  
    marginTop: "8%"
  },
  description: {
    color: "white",
    fontFamily: "Kanit-ExtraLight",
    fontSize: 14,
    marginTop: "5%"
  },
  container: {
    height: "100%"
  },
  slide: {
    paddingHorizontal: "5%",
    
  },


  grad2: {
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 3,
    marginBottom: "5%"
  },
  
  circle: {
    width: 10,
    height: 10,
    backgroundColor: "#898989",
    borderRadius: 100,
    marginRight: 5

  },

  active: {
    backgroundColor: "#2241E7",
  },

  circles: {
    marginTop: "10%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }

})

export default OnBoarding