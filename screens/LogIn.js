import React from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import BlockTubeLogo from '../assets/pictures/BlockTubeLogo.svg'
import FlatButton from '@core/Button';
import LinearGradient from 'react-native-linear-gradient';



const LogIn = () => {
  return (
    <>
      <View style = {styles.bg}>
        <View>
          <LinearGradient style={styles.grad1} colors={['#00a3ff75', '#11ddc475']}  
          useAngle= {true}
          angle = {103}
          angleCenter = {{x: 0.5, y: 0.5}}
          locations={[0.3942, 0.7583]}>
            <TouchableOpacity>
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
                <Text style = {[styles.grad1Text, styles.grad2Text]}>1 Of 3</Text>
            </LinearGradient>
            
            <Text style={styles.subtitle}>Lorem Ipsum Dolor</Text>
            <Text style={styles.description}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </Text>
            <View style={styles.circles}>
              <View style={[styles.circle, styles.active]}></View> 
              <View style={styles.circle}></View> 
              <View style={styles.circle}></View>
            </View>
          </View>
        </View>
        <FlatButton title = "Continue"/>
      </View>


    </>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    padding: 20,
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
    marginTop: "5%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }

})

export default LogIn