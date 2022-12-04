import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import data from '../../assets/data/slides'

const _renderItem = ({item, index}) => {
  return(
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  )
}

const index = () => {

  return (
    <View style={styles.container}>
      <Carousel
      data={data}
      renderItem={_renderItem}
      sliderWidth={Dimensions.get("screen").width}
      itemWidth={500}
      refs={'carousel'}
    />
  </View>
  )
}

export default index

const styles = StyleSheet.create({
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
    
  }

})
