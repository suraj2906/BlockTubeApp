import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon  from 'react-native-vector-icons/Ionicons'
import MIcon  from 'react-native-vector-icons/MaterialIcons'
import BlockTubeLogo from '../../../assets/pictures/BlockTubeLogo.svg'

const BottomNavigation= () => {
  return (

      <LinearGradient style={styles.navbar} colors={['#313030', '#222222', "#070707"]}  
          useAngle= {true}
          angle = {113}
          angleCenter = {{x: 0.5, y: 0.5}}
          locations={[0.1136, 0.28, 0.6491]}>
            <Icon name = "ios-add-circle-sharp" size={42}  style = {[styles.icon, styles.active]}/>
            <Icon name = "heart" size={42}  style = {[styles.icon, styles.inactive]}/>
            <View style={styles.btlogo}>
                <BlockTubeLogo  width = {60} height = {60}/>
            </View>
            <MIcon name = "subscriptions" size={42}  style = {[styles.icon, styles.inactive]}/>
            <Icon name = "ios-list-circle" size={42}  style = {[styles.icon, styles.inactive]}/>
            
            {/* <Icon name = "ios-lock-closed" size={22} color = "#666666" style = {styles.icon}/> */}
            
      </LinearGradient>

  )
}

export default BottomNavigation

const styles = StyleSheet.create({
    navbar: {
        position: "absolute",
        width: "100%",
        
        height: "7%",
        borderRadius: 7,
        top: "93%",
        left: "5%" ,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        

        
    },

    icon: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        
    },
    active: {
        color: "#ffffff"
    },
    inactive: {
        color: "#555555"
    },
    btlogo: {
        backgroundColor: "#2e2e2e",
        borderRadius: 100,
        padding: 15,
        bottom: 20
    }
    
})