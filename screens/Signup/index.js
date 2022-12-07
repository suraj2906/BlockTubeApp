import { StyleSheet, Text, View, TextInput, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import BlockTubeLogo from '../../assets/pictures/BlockTubeLogo.svg'
import { useState } from 'react'
import NumGradient from '../../components/NumGradient'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Signup = () => {

  const [form, setForm] = useState(0);
  const [email, onChangeEmail] = useState(null);
  const [pass, onChangePass] = useState(null);
  const [conPass, onChangeConPass] = useState(null);
  const [datePicker, setDatePicker] = useState(0)

  const windowHeight = Dimensions.get("screen").height;
  const formInputHeight = windowHeight*0.5*0.1;

  return (
    <View style={styles.bg}>
     
      <View style = {styles.container}>
        <BlockTubeLogo style={styles.image} width = {157} height = {142}/>
        <Text style = {styles.headText}>Create Account</Text>
        <NumGradient leftNum = {form + 1} rightNum = {2} />
        <View style = {[styles.form, windowHeight*0.5]}>
          <View style = {styles.headerWithInput}>
          <Text style={styles.formText}>Email Address</Text>
          
            <View style = {[styles.textInputWithIcon]} height = {formInputHeight}>
            <Icon name = "ios-mail" size={22} color = "#666666" style = {styles.icon}/> 
              <TextInput
                style={[styles.input]}
                height = {formInputHeight}
                onChangeText={onChangeEmail}
                value={email}
              />
            </View>
          </View>

          <View style = {styles.headerWithInput}>
            <Text style={styles.formText}>Password</Text>
            <View style = {[styles.textInputWithIcon, formInputHeight]}>
            <Icon name = "ios-lock-closed" size={22} color = "#666666" style = {styles.icon}/> 
              <TextInput
                style={styles.input}
                onChangeText={onChangePass}
                value={pass}
                height = {formInputHeight}
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style = {styles.headerWithInput}>
            <Text style={styles.formText}>Confirm Password</Text>
            <View style = {[styles.textInputWithIcon, formInputHeight]}>
            <Icon name = "ios-lock-closed" size={22} color = "#666666" style = {styles.icon}/>
              <TextInput
                style={[styles.input, formInputHeight]}
                onChangeText={onChangeConPass}
                value={conPass}
                height = {formInputHeight}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style = {styles.dobNSex}>
          <View style = {styles.headerWithInput}>
            <Text style={styles.formText}>DOB</Text>
            <View style = {[styles.textInputWithIcon, formInputHeight]} width = {"80%"}>

            <Icon name = "ios-calendar" size={22} color = "#666666" style = {styles.icon}/>
            
            </View>
            
            </View>
          </View>
          </View>
        </View>
  
      </View>
  )
}

export default Signup

const styles = StyleSheet.create({

  bg: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    padding: "5%",
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  headText: {
    fontFamily: "Kanit-SemiBold",
    fontWeight: "600",
    fontSize: 32,
    color: "white",
    marginVertical: "5%"
  },

  dateText: {
    fontFamily: "Kanit-Light",
    color: "white",
  },

  input: {
    width: "100%"
  },
  form: {
    width: "100%",

  },

  calActive: {
   display: "flex",
  },

  calInactive: {
    display: "flex",
  },

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

  headerWithInput: {
    
  },

  icon: {
    color: "#666666",
    padding: 10
    
  },

  dobNSex: {
    display: "flex",
    flexDirection: "row",
  }

})