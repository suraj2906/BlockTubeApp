import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


const index = (props) => {
  return (
    <LinearGradient style={styles.grad} colors={['#1950b9d9', '#1a4dac75']}  
            useAngle= {true}
            angle = {146.66}
            angleCenter = {{x: 0.5, y: 0.5}}
            locations={[0.3942, 0.7583]}>
                <Text style = {styles.gradText}>{props.leftNum} of {props.rightNum}</Text>
    </LinearGradient>
  )
}

export default index

const styles = StyleSheet.create({

    grad: {
        
        justifyContent: "center",
        fontSize: 20,
        right: 0,
        top: -10,
        borderRadius: 10,
        alignSelf: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 3,
        marginBottom: "5%"
      },


    gradText: {
        fontSize: 12,
        fontFamily: "Kanit-ExtraLight",
        fontWeight: "275",
      },
})