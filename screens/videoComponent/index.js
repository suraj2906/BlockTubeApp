import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Thumbnail from '../../assets/pictures/thumbnail.jpg'
import display from '../../assets/pictures/displayPicture.jpg'
import { createKeyboardAwareNavigator } from 'react-navigation'

const VideoComponent = (props) => {
  return (
    <View style = {styles.container}>
      <Image source={Thumbnail} style = {styles.thumbnailImage}/>
      <View style = {styles.tnBottom}>
        <Image source = {display} style={styles.displayPicture} />
        <View style={styles.tnText}>
            <Text style = {styles.videoTitle}>This is the Title of the Video</Text>
            <Text style = {styles.videoInfo}>Channel Name . 4 months ago</Text>
        </View> 
      </View>
    </View>

  )
}

export default VideoComponent

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "25%",
        marginVertical: 5,
        backgroundColor: "#161616",
        borderRadius: 20,
        borderColor: "353535",
        borderWidth: 1,
    },
    thumbnailImage: {
        width: "100%",
        height: "75%"
    },

    videoTitle: {
        fontFamily: "Kanit-Medium",
        fontSize: 15,
        paddingHorizontal: 7
    },
    tnBottom: {
        display: 'flex',
        flexDirection: "row",
        height: "25%",
        alignItems: "center",
        paddingHorizontal: 7

    },

    displayPicture: {
        borderRadius: 100,
        height: "80%",
        width: "13%"
    },
    videoInfo: {
        fontFamily: "Kanit-Light",
        fontSize: 10,
    },
    tnText : {
        justifyContent: 'center'
    }
})