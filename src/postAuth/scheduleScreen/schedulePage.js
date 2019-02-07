// React Native imports
import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import {AndroidBar, Divider} from 'cuHacking/src/common';

export default class SchedulePage extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {scrolled: false};
	}

	scrollToggle(event)
	{
		if (event.nativeEvent.contentOffset.y != 0)
		{
			if (!this.state.scrolled)
				this.setState({scrolled: true})					
		}
		else
		{
			if (this.state.scrolled)
				this.setState({scrolled: false})
		}
	}

	createHourStamp(hour) // 24h time
	{
		let timeString = "";

		if (hour >= 12)
			timeString = (hour == 12 ? hour : hour - 12) + ":00 p.m.";
		else
			timeString = (hour == 0 ? 12 : hour) + ":00 a.m.";

		return (
			<View style = {localStyle.hourStamp}>
				<Text style = {textStyle.bold(21, 'left', colors.secondaryTextColor)}>{timeString}</Text>
			</View>
		);
	}

	renderSchedule()
	{
		return (
			
			<View>
				<View style = {localStyle.dayStamp}>
					<Text style = {textStyle.bold(21, 'left', colors.primaryColor)}>February 16th</Text>
					<View style = {{height: 2, width: '100%', backgroundColor: colors.primaryColor}}/>
				</View>
				{this.createHourStamp(22)}
				{this.createHourStamp(23)}
				<View style = {localStyle.dayStamp}>
					<Text style = {textStyle.bold(21, 'left', colors.primaryColor)}>February 17th</Text>
					<View style = {{height: 2, width: '100%', backgroundColor: colors.primaryColor}}/>
				</View>
				{this.createHourStamp(0)}
				{this.createHourStamp(1)}
			</View>
		);
	}

	render()
	{
		return (
			<View style = {containerStyle.tabPage}>
				<AndroidBar color = {colors.lightSpaceColor} lifted = {this.state.scrolled}/>
				<ScrollView
					style = {localStyle.scrollBody}
					contentContainerStyle = {localStyle.scrollContent}
					showsVerticalScrollIndicator = {false}
					onScroll = {this.scrollToggle.bind(this)}
				>
					<View style = {localStyle.lightPage}>
						<View style = {localStyle.scrollSection}>
							<Text style = {textStyle.regular(48, 'center', colors.primaryTextColor)}>Schedule</Text>
						</View>
						<Divider color = {colors.dividerColor}/>
						{/* <View style = {localStyle.scrollSection}>
							{this.renderSchedule()}
						</View> */}
						<View style = {localStyle.scrollSection}>
							<Text style = {textStyle.regular(16, 'center')}>W.I.P</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const localStyle = StyleSheet.create(
{
	scrollBody: {alignSelf: 'stretch'},
	scrollContent:
	{
		justifyContent: 'center'
	},
	scrollSection:
	{
		marginVertical: 10,
		justifyContent: 'center'
	},
	lightPage:
	{
		paddingTop: 25,
		elevation: 15,
		backgroundColor: colors.lightSpaceColor
	},
	hourStamp:
	{
		paddingLeft: 30,
		paddingBottom: 10
	},
	dayStamp:
	{
		// paddingLeft: 30,
		paddingBottom: 10
	}
});