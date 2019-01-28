// React Native imports
import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Redux imports
import {connect} from 'react-redux';
import {switchTab} from './actions';

// Custom imports
import {colors, textStyle} from 'cuHacking/src/common/appStyles';

class TabNavigator extends Component
{
	createIcon(name)
	{
		return {
			inactive: <Icon
				name = {name}
				size = {30}
				color = {colors.secondaryTextColor}
			/>,
			active: <Icon
				name = {name}
				size = {30}
				color = {colors.primaryColor}
			/>
		};
	}

	createBadgeIcon()
	{
		var iconStyle = StyleSheet.create(
		{
			active:
			{
				width: 55,
				height: 55,
				tintColor: colors.primaryColor
			},
			inactive:
			{
				width: 55,
				height: 55,
				tintColor: colors.primaryTextColor
			}
		});

		return {
			inactive: <Image
				source = {require('cuHacking/assets/images/cuHacking-logo-inverse.png')}
				resizeMode = 'contain'
				fadeDuration = {0}
				style = {iconStyle.inactive}
			/>,
			active: <Image
				source = {require('cuHacking/assets/images/cuHacking-logo-inverse.png')}
				resizeMode = 'contain'
				fadeDuration = {0}
				style = {iconStyle.active}
			/>
		};
	}

	createButton(icon, title, action)
	{
		if (title == "Badge")
		{
			return <TouchableOpacity onPress = {action} style = {[localStyle.tabBarIcon, {justifyContent: 'center', top: -8}]}>
				<View style = {{alignItems: 'center'}}>
					{this.props.selectedTab == title ? icon.active : icon.inactive}
				</View>
			</TouchableOpacity>;
		}
		else
		{
			var isActive = (this.props.selectedTab == title);
			return (
				<TouchableOpacity
					onPress = {action}
					style = {localStyle.tabBarIcon}
				>
					<View style = {{alignItems: 'center'}}>
						{isActive ? icon.active : icon.inactive}
						<Text style = {{
							paddingVertical: 3,
							...textStyle.light(12, 'center', isActive ? colors.primaryColor : colors.secondaryTextColor)
						}}>
							{title}
						</Text>
					</View>
				</TouchableOpacity>
			);
		}
	}

	navigateTo(pageTitle)
	{
		this.props.switchTab(pageTitle);
		this.props.navigation.navigate(pageTitle);
	}

	render()
	{
		return (
			<View style = {localStyle.default}>
				<View style = {localStyle.badgeArcBack}/>
				<View style = {localStyle.background}/>
				<View style = {localStyle.badgeArcFront}/>
				<View style = {localStyle.buttonContainer}>
					{this.createButton(this.createIcon('notifications'), "Updates", () => this.navigateTo("Updates"))}
					{this.createButton(this.createIcon('map'), "Map", () => this.navigateTo("Map"))}
					{this.createButton(this.createBadgeIcon(), "Badge", () => this.navigateTo("Badge"))}
					{this.createButton(this.createIcon('event-note'), "Schedule", () => this.navigateTo("Schedule"))}
					{this.createButton(this.createIcon('menu'), "More", () => this.navigateTo("More"))}
				</View>
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


const localStyle = StyleSheet.create(
{
	default:
	{
		flex: 0.075,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonContainer:
	{
		flexDirection: 'row',
		elevation: 10
	},
	background:
	{
		backgroundColor: colors.lightSpaceColor,
		borderColor: colors.dividerColor,
		borderTopWidth: .75,
		position: 'absolute',
		elevation: 10,
		width: '100%',
		height: '100%'
	},
	badgeArcBack:
	{
		position: 'absolute',
		backgroundColor: colors.lightSpaceColor,
		borderTopWidth: 1,
		borderColor: colors.dividerColor,
		borderWidth: 1,
		borderRadius: 33,
		elevation: 10,
		top: -10,
		width: 66,
		height: 66
	},
	badgeArcFront:
	{
		position: 'absolute',
		backgroundColor: colors.lightSpaceColor,
		borderRadius: 32,
		elevation: 10,
		top: -9,
		width: 64,
		height: 64
	},
	tabBarIcon:
	{
		flex: 1,
		alignSelf: 'stretch',
		justifyContent: 'flex-end',
	}
});