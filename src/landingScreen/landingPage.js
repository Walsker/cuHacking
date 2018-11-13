// React Native imports
import React, {Component} from 'react';
import {Alert, Button, Dimensions, Image, StatusBar, Text, TextInput, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';

export default class LandingPage extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			email: "",
			emailSubmitted: false
		}
	}

	emailBox()
	{
		return (
			<View style = {containerStyle.inputArea}>
				<View style = {containerStyle.inputBox}>
					<Text style = {textStyle.regular(20, 'center', 'white')}>
						Registration opens November 19th!
					</Text>
				</View>
			</View>
		);
	}

	render()
	{
		var {height, width} = Dimensions.get('window');
		var imageSize = width / 1.75;

		return (
			<View style = {[
				containerStyle.screen,
				{
					backgroundColor: colors.primarySpaceColor,
					minHeight: height + StatusBar.currentHeight
				}
			]}>
				<View style = {containerStyle.screenSection}>
					<Image
						source = {require('cuHacking/assets/images/cuHacking-logo.png')}
						resizeMode = 'contain'
						fadeDuration = {0}
						style = {{width: imageSize, height: imageSize}}
					/>
				</View>
				<View style = {containerStyle.screenSection}>
					<View style = {[containerStyle.textBox, {marginTop: -15}]}>
						<Text style = {textStyle.bold(62, 'center', colors.primaryColor)}>cuHacking</Text>
					</View>
					<View style = {containerStyle.textBox}>
						<Text style = {textStyle.bold(24, 'center')}>February 16th - 17th 2019</Text>
						<Text style = {textStyle.light(24, 'center')}>@ Carleton University</Text>
					</View>
				</View>
				{this.emailBox()}
			</View>
			
		);
	}
}