// React Native imports
import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';

// Custom imports
import {containerStyle} from 'cuHacking/src/common/appStyles';
import LandingPage from 'cuHacking/src/landingScreen';

export default class App extends Component
{
	render()
	{
		return(
			<View style = {containerStyle.default}>
				<StatusBar
                    translucent
                    animated
                    backgroundColor = "rgba(0, 0, 0, 0.2)"
                />
				<LandingPage/>
			</View>
		);
	}
}