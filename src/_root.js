// React Native imports
import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// Custom imports
import {containerStyle} from 'cuHacking/src/common/appStyles';
import RootNavigator from './_rootNavigator';
import LandingPage from 'cuHacking/src/landingScreen/landingPage';

export default class App extends Component
{
	componentDidMount() {
		SplashScreen.hide()
	}

	render()
	{
		return(
			<View style = {containerStyle.default}>
				<StatusBar
                    translucent
                    animated
                    backgroundColor = "rgba(0, 0, 0, 0.2)"
                />
				<RootNavigator/>
			</View>
		);
	}
}