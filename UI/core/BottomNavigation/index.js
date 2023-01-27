import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import BlockTubeLogo from '../../../assets/pictures/BlockTubeLogo.svg'

import Navigation from "../../../assets/logo/navigation.svg"
import { BlurView } from '@react-native-community/blur'

const BottomNavigation = () => {
    return (

        //   <LinearGradient style={styles.navbar} colors={['#313030', '#222222', "#070707"]}  
        //       useAngle= {true}
        //       angle = {113}
        //       angleCenter = {{x: 0.5, y: 0.5}}
        //       locations={[0.1136, 0.28, 0.6491]}>
        //         <Icon name = "ios-add-circle-sharp" size={42}  style = {[styles.icon, styles.active]}/>
        //         <Icon name = "heart" size={42}  style = {[styles.icon, styles.inactive]}/>
        //         <View style={styles.btlogo}>
        //             <BlockTubeLogo  width = {60} height = {60}/>
        //         </View>
        //         <MIcon name = "subscriptions" size={42}  style = {[styles.icon, styles.inactive]}/>
        //         <Icon name = "ios-list-circle" size={42}  style = {[styles.icon, styles.inactive]}/>

        //         {/* <Icon name = "ios-lock-closed" size={22} color = "#666666" style = {styles.icon}/> */}

        //   </LinearGradient>
        <View style={{ position: "absolute", bottom: -60, alignSelf: "center" }}>
            {/* <BlurView blurAmount={100} style={styles.absolute} blurType="dark" reducedTransparencyFallbackColor="white" /> */}
            <Navigation>
            </Navigation>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", top: -60 }}>
                <View style={styles.option}>
                    <Icon name="ios-add-circle-sharp" size={30} style={[styles.icon, styles.active]} />
                    <Text style={styles.optiontext}>Upload</Text>
                </View>
                <View style={styles.option}>
                    <Icon name="heart" size={30} style={[styles.icon, styles.inactive]} />
                    <Text style={styles.optiontext}>Favourites</Text>
                </View>
                <View style={styles.option}>
                    <TouchableOpacity style={styles.btlogo}>
                        <BlockTubeLogo width={30} height={35} />
                    </TouchableOpacity>
                    <Text style={[styles.optiontext, { top: -12, left: 5 }]}>BlockTube</Text>
                </View>
                <View style={styles.option}>

                    <MIcon name="subscriptions" size={30} style={[styles.icon, styles.inactive]} />
                    <Text style={styles.optiontext}>Subscriptions</Text>
                </View>
                <View style={styles.option}>

                    <Icon name="ios-list-circle" size={30} style={[styles.icon, styles.inactive]} />
                    <Text style={styles.optiontext}>Watchlist</Text>
                </View>
            </View>
        </View>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        // bottom: 0,
        right: 0
    },
    navbar: {
        position: "absolute",
        width: "100%",

        height: "7%",
        borderRadius: 7,
        top: "93%",
        left: "5%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",



    },

    icon: {
        position: "relative",
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
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 10,
        paddingVertical: 10,
        paddingLeft: 16,
        borderRadius: 100,
        top: -18,
        left: 1
    },
    option: {
        flexDirection: "column",
        // top: -30,
    },
    optiontext: {
        color: "#7b7b7b",
        fontFamily: "Kanit-SemiBold",
        fontSize: 8,
        alignSelf: "center",
    }
})