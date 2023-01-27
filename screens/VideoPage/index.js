import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavigation from '../../UI/core/BottomNavigation'
import VideoComponent from 'screens/videoComponent'

const VideoPage = () => {
  return (
    <View style={styles.main}>
        <VideoComponent/>
      <BottomNavigation/>
    </View>
  )
}

export default VideoPage

const styles = StyleSheet.create({
    main: {
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        padding: "5%"
    }
})