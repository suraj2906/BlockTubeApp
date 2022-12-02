import React, {useState} from 'react';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
// import Stack from './routes/loginStack';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name = "LogIn" component = {LogIn}/>
          <Stack.Screen name = "SignUp" component = {SignUp}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App