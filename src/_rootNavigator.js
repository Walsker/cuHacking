// React Navigation imports
import {createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';
import {LandingPage, SignInPage} from 'cuHacking/src/preAuth';
import {UpdatesPage, MapPage, TeamsPage, DisplayIDPage} from 'cuHacking/src/postAuth';

const PreAuthStack = createStackNavigator(
{
	"Landing": {screen: LandingPage},
	"SignIn": {screen: SignInPage}
},
{
	headerMode: 'none',
	initialRouteName: "Landing"
});
	
const MainNavigator = createBottomTabNavigator(
{
	"Updates": UpdatesPage,
	"Map": MapPage,
	"Teams": TeamsPage,
	"Badge": DisplayIDPage
});

const RootNavigator = createSwitchNavigator(
{
	// "AuthLoading": AuthLoadingScreen,
    "Main": MainNavigator,
    "Auth": PreAuthStack
},
{
	initialRouteName: "Main"
});

export default createAppContainer(RootNavigator);