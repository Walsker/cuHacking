// React Navigation imports
import {createAppContainer, createStackNavigator, createTabNavigator } from 'react-navigation';
import LandingPage from 'cuHacking/src/landingScreen/landingPage';
import SignInPage from 'cuHacking/src/signInScreen/signInPage';

const RootNavigator = createStackNavigator(
{
	"Landing": {screen: LandingPage},
	"SignIn": {screen: SignInPage}
},
{
	headerMode: 'none',
	initialRouteName: "SignIn"
});

export default createAppContainer(RootNavigator);