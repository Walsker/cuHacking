// React imports
import React from 'react';

// React Navigation imports
import {createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';

// Routes
import {LandingPage, SignInPage} from 'cuHacking/src/preAuth';
import LoadingPage from 'cuHacking/src/loadingScreen/loadingPage';
import {AboutPage, BadgePage, MapPage, SchedulePage, UpdatesPage, TabNavigator} from 'cuHacking/src/postAuth';

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
	"Badge": BadgePage,
	"Schedule": SchedulePage,
	"About": AboutPage
},
{
	initialRouteName: "Badge",
	tabBarComponent: (props) => <TabNavigator {...props}/>
});

const RootNavigator = createSwitchNavigator(
{
    "Main": MainNavigator,
	"PreAuth": PreAuthStack,
	"Loading": {screen: LoadingPage}
},
{
	initialRouteName: "Loading"
});

export default createAppContainer(RootNavigator);