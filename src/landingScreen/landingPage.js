// React Native imports
import React, {Component} from 'react';
import {ScrollView} from 'react-native';

// Custom imports
import LogoSection from './logoSection';
import CountdownSection from './countdownSection';
import ContactSection from './contactSection';

export default class LandingPage extends Component
{
	render()
	{
		return (
			<ScrollView showsVerticalScrollIndicator = {false} showsHorizontalScrollIndicator = {false}>
				<LogoSection/>
				<CountdownSection/>
				<ContactSection/>
			</ScrollView>
		);
	}
}