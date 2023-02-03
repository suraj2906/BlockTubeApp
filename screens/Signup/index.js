import { StyleSheet, Text, View, TextInput, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import BlockTubeLogo from '../../assets/pictures/BlockTubeLogo.svg'
import { useState } from 'react'
import NumGradient from '../../components/NumGradient'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FlatButton from 'UI/core/Button'
import { SelectList } from 'react-native-dropdown-select-list'
import DropDownPicker from 'react-native-dropdown-picker';
import Input from '../../UI/core/Input'

const Signup = ({ navigation }) => {

  const [form, setForm] = useState(0);
  const [email, onChangeEmail] = useState(null);
  const [pass, onChangePass] = useState(null);
  const [conPass, onChangeConPass] = useState(null);
  const [datePicker, setDatePicker] = useState(0)

  const windowHeight = Dimensions.get("screen").height;
  const formInputHeight = windowHeight * 0.5 * 0.1;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Non-Binary', value: 'nonBinary' },
    { label: 'Other', value: 'other' }
  ]);

  const genderData = [
    { key: '1', value: 'Male' },
    { key: '2', value: 'Female' },
    { key: '3', value: 'Non-Binary' },
    { key: '4', value: 'Other' },
  ]

  const [selected, setSelected] = React.useState("");


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const FormatDate = (date) => {
    let dateString =
      date.getDate() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getFullYear();

    return dateString;
  }

  const handleConfirm = (date) => {

    setDate(FormatDate(date))
    hideDatePicker();
  };




  return (
    <View style={styles.bg}>

      <View style={styles.container}>
        <BlockTubeLogo style={styles.image} width={157} height={142} />
        <Text style={styles.headText}>Create Account</Text>
        <NumGradient leftNum={form + 1} rightNum={2} />
        <View style={[styles.form, windowHeight * 0.5]}>
          
          <Input onChange = {onChangeEmail} icon = {'ios-mail'} value={email} text="Email Address"/>
          <Input onChange={onChangePass} icon="ios-lock-closed" value={pass} text="Password" password={true}/>
          <Input onChange={onChangeConPass} icon="ios-lock-closed" value={conPass} text="Confirm Password" password={true}/>

          <View style={styles.dobNSex}>
            <View style={styles.headerWithInput}>

              <Text style={styles.formText}>DOB</Text>
              <View style={[styles.textInputWithIcon, formInputHeight]} width={"110%"}>

                <Icon name="ios-calendar" size={22} color="#666666" style={styles.icon} onPress={showDatePicker} />
                <Text style={styles.dateText} onPress={showDatePicker}>{date ? date : "Select Date"}</Text>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />

              </View>

            </View>

            <View style={styles.sex} width={"55%"}>

              <Text style={styles.formText}>Gender</Text>
              <View style={[styles.textInputWithIcon, formInputHeight]} >

                <Icon name="man" size={22} color="#666666" style={styles.icon} onPress={showDatePicker} />

                {/* <SelectList 
              maxHeight={100}
              setSelected={(val) => setSelected(val)} 
              data={genderData} 
              save="value"
              borderWidth="0"
              placeholder='Select Gender'
              search = {false}
              boxStyles = {{borderWidth: 0}}
              dropdownStyles = {{borderWidth: 0}}
              inputStyles = {{color: "white"}}
              arrowicon = ""
            /> */}

                <DropDownPicker
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  style={styles.genderDrop}
                  placeholder="Select Sex"
                  textStyle={styles.dateText}
                  dropDownContainerStyle={styles.genderDrop}
                />

              </View>

            </View>
          </View>
          <FlatButton title="Move Forward" style={styles.button} onPress={() => { navigation.navigate("VideoPage") }} />
        </View>

      </View>

    </View>
  )
}

export default Signup

const styles = StyleSheet.create({

  genderDrop: {
    backgroundColor: "#262626",
    borderWidth: 0,
    width: "77%",
    
  },

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
    fontFamily: "Kanit-SemiBold",
    color: "#afafaf",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 38
  },

  input: {
    width: "100%",
    color: "#bbb"
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
    alignItems:"center",
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
    marginTop: "4%",
    color: "#afafaf"
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
    justifyContent: "space-between",
  },

  sex: {
    marginTop: "-1%"
  },

  button: {
    marginTop: "5%",
    width: "100%",
  }

})