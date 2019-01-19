// React Native imports
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Custom imports
import {colors, textStyle} from 'cuHacking/src/common/appStyles';
import { containerStyle } from '../../common/appStyles';

export default class SchedulePage extends Component
{
	render()
	{
		return (
			<View style = {containerStyle.tabPage}>
				<Text>"THE TEAM BUILDER INTERFACE"</Text>
			</View>
		);
	}
}

const localStyle = StyleSheet.create(
{

});