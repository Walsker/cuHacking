// React Native imports
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';

export default class UpdatesPage extends Component
{
	render()
	{
		return (
			<View style = {containerStyle.tabPage}>
				<Text>A display for event updates.</Text>
			</View>
		);
	}
}

const localStyle = StyleSheet.create(
{

});