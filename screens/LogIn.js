import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import BlueCircle from '../assets/pictures/BlueCircle.svg';
import { BlurView } from '@react-native-community/blur';
import { Svg, Circle,  } from 'react-native-svg';
import BlockTubeLogo from '../assets/pictures/BlockTubeLogo.svg'


const LogIn = () => {
  return (
    <>
      <View style = {styles.bg}>
        <View>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.BT}>BlockTube</Text>
        </View>
        <View style={styles.logo}>
          <BlockTubeLogo style={styles.image}/>
          <View style={styles.wctext}>
            <Text style={styles.subtitle}>Lorem Ipsum Dolor</Text>
            <Text style={styles.description}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </Text>
          </View>
        </View>
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

  welcome: {
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
    height: "80%",
    textAlign: "right"
  },


  subtitle: {
    color: "white",
    fontFamily: "Kanit-ExtraLight",
    fontSize: 24,  
    marginTop: "25%"  
  },

  description: {
    color: "white",
    fontFamily: "Kanit-ExtraLight",
    fontSize: 14,
    marginTop: "5%"
  },

  wctext: {
    alignItems: "flex-start",
  }
  
})

export default LogIn