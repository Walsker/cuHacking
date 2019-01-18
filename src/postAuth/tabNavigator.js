// React Native imports
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// Custom imports
import {colors, textStyle} from 'cuHacking/src/common/appStyles';

export default class TabNavigator extends Component
{
	createMockIcon()
	{
		return <View style = {{width: 25, height: 25, backgroundColor: 'white'}}/>;
	}

	createMockBadgeIcon()
	{
		return <View style = {{width: 40, height: 40, backgroundColor: 'white', borderRadius: 20}}/>;
	}

	createButton(icon, title, action)
	{
		return (
			<TouchableOpacity
				onPress = {action}
				style = {styles.tabBarIcon}
			>
				<View style = {{alignItems: 'center'}}>
					{icon}
					<Text style = {styles.tabBarText}>{title}</Text>
				</View>
			</TouchableOpacity>
		);
	}

	render()
	{
		return (
			<View style = {styles.default}>
				<View style = {styles.badgeArc}/>
				{this.createButton(this.createMockIcon(), "Updates", () => {})}
				{this.createButton(this.createMockIcon(), "Map", () => {})}
				{this.createButton(this.createMockBadgeIcon(), "Badge", () => {})}
				{this.createButton(this.createMockIcon(), "Schedule", () => {})}
				{this.createButton(this.createMockIcon(), "About", () => {})}
			</View>
		);
	}
}

const styles = StyleSheet.create(
{
	default:
	{
		flex: 0.075,
		flexDirection: 'row',
		backgroundColor: colors.primaryColor,
		justifyContent: 'center',
		alignItems: 'center'
	},
	badgeArc:
	{
		backgroundColor: colors.primaryColor,
		// backgroundColor: 'blue',
		position: 'absolute',
		width: 90,
		height: 90,
		borderRadius: 45
	},
	tabBarIcon:
	{
		flex: 1,
		alignSelf: 'stretch',
		justifyContent: 'flex-end',
	},
	tabBarText:
	{
		...textStyle.light(12, 'center', 'white'),
		paddingVertical: 5
	}
});