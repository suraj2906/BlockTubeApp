import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import BlueCircle from '../assets/pictures/BlueCircle.svg';
import { BlurView } from '@react-native-community/blur';


const LogIn = () => {
  return (
    <>
    
       
    {/* <View style = {styles.bg} /> */}
    <View style={styles.bg}></View>
    <BlueCircle style={styles.blueCircle}/>
    
    <BlurView blurType="light"
       blurAmount={50}
       blurRadius={10}
       style={{height: "100%", width: "100%"}}
       reducedTransparencyFallbackColor="white"/>
    
       
    <BlurView blurType="light"
       blurAmount={50}
       blurRadius={10}
       style={{height: "100%", width: "100%"}}
       reducedTransparencyFallbackColor="white"/>
       
    <BlurView blurType="light"
       blurAmount={50}
       blurRadius={10}
       style={{height: "100%", width: "100%"}}
       reducedTransparencyFallbackColor="black"/>
       <View style={styles.topView}></View>
       
       
       
     
     
       </>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "black",
    width: "100%",
    height: "100%"
  },
  topView:{
    color: "white",
    width: 100,
    height: 100
  },
  blueCircle: {
    position: 'absolute',
     top: 0,
     left: 0,
     bottom: 0,
  }
})

export default LogIn