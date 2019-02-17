// React Native imports
import React, {Component} from 'react';
import {ScrollView} from 'react-native';

// Custom imports
import LogoSection from './logoSection';
import ContactSection from './contactSection';
import {colors} from 'cuHacking/src/common/appStyles';

export default class LandingPage extends Component
{
	render()
	{
		return (
			<ScrollView 
				style = {{backgroundColor: colors.primarySpaceColor}}
				showsVerticalScrollIndicator = {false}
				showsHorizontalScrollIndicator = {false}
			>
				<LogoSection/>
				<ContactSection/>
			</ScrollView>
		);
	}
}