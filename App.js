import 'react-native-gesture-handler';
import React, {useState} from 'react';
import OnBoarding from './screens/OnBoarding';
import LogIn from '@screens/Login';
import SignUp from '@screens/Signup';
// import Stack from './routes/loginStack';
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import { store } from '@store/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawerContent from '@components/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name = "LogIn" component = {LogIn}/>
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