// React Native imports
import React, {Component} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';

// Custom imports
import {containerStyle} from 'cuHacking/src/common/appStyles';
import {AndroidBar} from 'cuHacking/src/common';
import LandingPage from './landingScreen/landingPage';
import CountdownPage from './countdownScreen/countdownPage';
import SponsorsPage from './sponsorsScreen/sponsorsPage';
import ContactPage from './contactScreen/contactPage';

export default class App extends Component
{
	render()
	{
		return(
			<View style = {containerStyle.default}>
				<ScrollView showsVerticalScrollIndicator = {false} showsHorizontalScrollIndicator = {false}>
					{/* <AndroidBar/> */}
					<StatusBar
						translucent
						animated
						backgroundColor = "rgba(0, 0, 0, 0.2)"
					/>
					{/* <LandingPage/> */}
					<CountdownPage/>
					<SponsorsPage/>
					<ContactPage/>
				</ScrollView>
			</View>
		);
	}
}