import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"; 
import styles from "./styles";

const FlatButton = (props) =>  {
    return(
        <TouchableOpacity onPress = {props.onPress}>
            <View style={[styles.button, props.style]}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}



export default FlatButton