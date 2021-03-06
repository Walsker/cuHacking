// React imports
import React from 'react';

// React Navigation imports
import {createAppContainer, createStackNavigator, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';

// Routes
import {LandingPage, SignInPage} from 'cuHacking/src/preAuth';
import LoadingPage from 'cuHacking/src/loadingScreen/loadingPage';
import {BadgePage, MorePage, SchedulePage, TabNavigator} from 'cuHacking/src/postAuth';

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
	"Badge": BadgePage,
	"Schedule": SchedulePage,
	"More": MorePage
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