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
				<Text>"LIVE UPDATES THAT WERE SENT OUT AS PUSH NOTIFICATIONS ARE DISPLAYED HERE IN REVERSE CHRONOLOGICAL ORDER"</Text>
			</View>
		);
	}
}

const localStyle = StyleSheet.create(
{

});