import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'


const index = ({item}) => {

  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Text style={styles.subtitle}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
        height: "100%",
        width: "50%"
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
    

    
    
})