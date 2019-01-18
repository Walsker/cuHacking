// React Native imports
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// Redux imports
import {connect} from 'react-redux';
import {switchTab} from './actions';

// Custom imports
import {colors, textStyle} from 'cuHacking/src/common/appStyles';

class TabNavigator extends Component
{
	createMockIcon()
	{
		var iconStyle = StyleSheet.create(
		{
			active:
			{
				width: 25,
				height: 25,
				backgroundColor: 'white',
				borderColor: 'white',
				borderWidth: 2
			},
			inactive:
			{
				width: 25,
				height: 25,
				backgroundColor: 'transparent',
				borderColor: 'white',
				borderWidth: 2
			}
		});

		return {
			inactive: <View style = {iconStyle.inactive}/>,
			active: <View style = {iconStyle.active}/>
		};
	}

	createMockBadgeIcon()
	{
		var iconStyle = StyleSheet.create(
		{
			active:
			{
				width: 40,
				height: 40,
				backgroundColor: 'white',
				borderColor: 'white',
				borderWidth: 2,
				borderRadius: 20
			},
			inactive:
			{
				width: 40,
				height: 40,
				backgroundColor: 'transparent',
				borderColor: 'white',
				borderWidth: 2,
				borderRadius: 20
			}
		});

		return {
			inactive: <View style = {iconStyle.inactive}/>,
			active: <View style = {iconStyle.active}/>
		};
	}

	createButton(icon, title, action)
	{
		return (
			<TouchableOpacity
				onPress = {action}
				style = {styles.tabBarIcon}
			>
				<View style = {{alignItems: 'center'}}>
					{this.props.selectedTab == title ? icon.active : icon.inactive}
					<Text style = {styles.tabBarText}>{title}</Text>
				</View>
			</TouchableOpacity>
		);
	}

	navigateTo(pageTitle)
	{
		this.props.switchTab(pageTitle);
		this.props.navigation.navigate(pageTitle);
	}

	render()
	{
		return (
			<View style = {styles.default}>
				<View style = {styles.badgeArc}/>
				{this.createButton(this.createMockIcon(), "Updates", () => this.navigateTo("Updates"))}
				{this.createButton(this.createMockIcon(), "Map", () => this.navigateTo("Map"))}
				{this.createButton(this.createMockBadgeIcon(), "Badge", () => this.navigateTo("Badge"))}
				{this.createButton(this.createMockIcon(), "Schedule", () => this.navigateTo("Schedule"))}
				{this.createButton(this.createMockIcon(), "About", () => this.navigateTo("About"))}
			</View>
		);
	}
}

const mapStateToProps = (state) =>
{
	return {
		selectedTab: state.selectedTab
	};
}
export default connect(mapStateToProps, {switchTab})(TabNavigator);


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