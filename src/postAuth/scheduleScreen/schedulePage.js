// React Native imports
import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

// Custom imports
import {colors, containerStyle} from 'cuHacking/src/common/appStyles';
import {AndroidBar} from 'cuHacking/src/common';

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

	render()
	{
		let content = [];
		for (let i = 0; i < 1000; i++)
			content.push(<Text key = {i}>The event schedule.</Text>)
		return (
			<View style = {containerStyle.tabPage}>
				<AndroidBar color = {colors.lightSpaceColor} lifted = {this.state.scrolled}/>
				<ScrollView
					style = {localStyle.scrollBody}
					contentContainerStyle = {localStyle.scrollContent}
					showsVerticalScrollIndicator = {false}
					onScroll = {this.scrollToggle.bind(this)}
				>
					{content}
				</ScrollView>
			</View>
		);
	}
}

const localStyle = StyleSheet.create(
{
	scrollBody:
	{
		alignSelf: 'stretch'
	},
	scrollContent:
	{
		height: 5000,
		justifyContent: 'center'
	}
});