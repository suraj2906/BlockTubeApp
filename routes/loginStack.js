import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';

const screens = {
    LogIn: {
        screen: LogIn
    },
    SignUp: {
        screen: SignUp
    }
}

const LogInStack = createStackNavigator(screens);

export default createAppContainer(LogInStack)