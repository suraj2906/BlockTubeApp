import React, {useState} from 'react';
import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import Navigator from './routes/loginStack';
import { store } from './redux/store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <Provider store={store}>
      <Navigator/> 
    </Provider>
  )
}

export default App