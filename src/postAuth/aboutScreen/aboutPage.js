// React Native imports
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Custom imports
import {colors, textStyle} from 'cuHacking/src/common/appStyles';

export default class AboutPage extends Component
{
	render()
	{
		return (
			<View style = {styles.default}>
				<Text>About page and sponsors</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create(
{
	default:
	{
		flex: 1,
		backgroundColor: colors.primarySpaceColor,
		justifyContent: 'center',
		alignItems: 'center'
	},
});