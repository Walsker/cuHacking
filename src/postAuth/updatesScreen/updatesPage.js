// React Native imports
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import {AndroidBar} from 'cuHacking/src/common';

export default class UpdatesPage extends Component
{
	render()
	{
		return (
			<View style = {containerStyle.tabPage}>
				<AndroidBar/>
				<Text>A display for event updates.</Text>
			</View>
		);
	}
}

const localStyle = StyleSheet.create(
{

});