import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import BlueCircle from '../assets/pictures/BlueCircle.svg';
import { BlurView,  } from '@react-native-community/blur';
import PrimaryButton from '@core/PrimaryButton';


const LogIn = () => {
  return (
    <>
      <PrimaryButton />
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
     transform : [{scale: 0.3}],
  }
})

export default LogIn