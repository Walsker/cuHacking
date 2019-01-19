// React Native imports
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';

export default class MapPage extends Component
{
	render()
	{
		return (
			<View style = {containerStyle.tabPage}>
				<Text>An interactive map.</Text>
			</View>
		);
	}
}

const localStyle = StyleSheet.create(
{

});