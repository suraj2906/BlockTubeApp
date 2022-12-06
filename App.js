import 'react-native-gesture-handler';
import React, {useState} from 'react';
<<<<<<< Updated upstream
import OnBoarding from './screens/OnBoarding';
import SignUp from './screens/SignUp';
=======
import LogIn from '@screens/Login';
import SignUp from '@screens/Signup';
>>>>>>> Stashed changes
// import Stack from './routes/loginStack';
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import { store } from '@store/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import BlockTubeLogo from './assets/pictures/BlockTubeLogo.svg'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const width = useWindowDimensions().width * 0.3;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{marginTop: 25, marginLeft: 10, marginBottom: 31, flex: 1, flexDirection: "row", alignItems:"center"}}>
        <BlockTubeLogo width={34} height={30} />
        <Text style={{fontFamily: "Kanit-SemiBold", fontSize: 32, color:"#f4f4f4", marginLeft: 10}}>BLOCKTUBE</Text>
      </View>
      <DrawerItem 
        style={{width: "90%", height: 47, paddingLeft: 10, backgroundColor: "#515151", borderRadius: 10, borderWidth: 1, borderColor: "#616161", marginBottom: 2}} 
        label="Home"
        labelStyle={{color: "#c3c3c3", fontFamily:"Kanit-Regular", left: -25, marginTop: 1}}
        icon={()=><MaterialCommunityIcons name="home" color="#d6d6d6" size={23}/>}
      >

      </DrawerItem>
    </DrawerContentScrollView>
  );
}
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
<<<<<<< Updated upstream
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name = "OnBoarding" component = {OnBoarding}/>
=======
        {/* <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name = "LogIn" component = {LogIn}/>
>>>>>>> Stashed changes
          <Stack.Screen name = "SignUp" component = {SignUp}/>
        </Stack.Navigator> */}
        <Drawer.Navigator screenOptions={{
          drawerStyle:{
            backgroundColor: "#353535"
          }
        }}
         initialRouteName="Home" drawerContent={(props)=> <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={LogIn} />
          <Drawer.Screen name="Notifications" component={SignUp} />
      </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    height: "100%",
    backgroundColor: "#353535"
  },
  menuItemsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
});