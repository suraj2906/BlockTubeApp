import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import React from 'react'

const index = (props) => {
    const windowHeight = Dimensions.get("screen").height;
    const formInputHeight = windowHeight * 0.5 * 0.1;

    return (
        <View>
            <Text style={styles.formText}>{props.text}</Text>

            <View style={[styles.textInputWithIcon]} height={formInputHeight}>
                <Icon name={props.icon} size={22} color="#666666" style={styles.icon} />
                <TextInput
                    style={[styles.input]}
                    height={formInputHeight}
                    onChangeText={props.onChange}
                    value={props.value}
                    secureTextEntry = {props.password?true:false}
                />
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({

    textInputWithIcon: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#262626",
        marginTop: "1%",
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#444444",
    
      },
    
      formText: {
        fontFamily: "Kanit-Bold",
        fontSize: 16,
        marginTop: "4%"
      },
    
    
      icon: {
        color: "#666666",
        padding: 10
    
      },

      input: {
        width: "100%"
      },
})