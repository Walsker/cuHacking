// React Native imports
import React, {Component} from 'react';
import {Dimensions, Image, Linking, StatusBar, Text, TouchableOpacity, View} from 'react-native';

// React Navigation imports
import {withNavigation} from 'react-navigation';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import {Button} from 'cuHacking/src/common';

class LogoSection extends Component
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

	socialLinks()
	{
		const clickableIcon = (platform, hyperlink) =>
		{
			let icon;
			const iconSize = 50;

			switch (platform)
			{
				case 'FB':
					icon = require('cuHacking/assets/images/socials/facebook_icon.png');
					break;
				case 'IG':
					icon = require('cuHacking/assets/images/socials/instagram_icon.png');
					break;
				case 'T':
					icon = require('cuHacking/assets/images/socials/twitter_icon.png');
					break;
			}

			return (
				<View>
					<TouchableOpacity
						onPress = {() => Linking.openURL(hyperlink).catch(err => console.error('Could not open form', err))}
						style = {{marginVertical: 20, marginHorizontal: 20}}
					>
						<Image source = {icon}
							resizeMode = 'contain'
							fadeDuration = {200}
							style = {{width: iconSize, height: iconSize}}
						/>
					</TouchableOpacity>
				</View>
			);
		};

		return(
			<View style = {{paddingVertical: 25}}>
				<Text style = {textStyle.light(28, 'center', colors.primaryTextColor)}>Stay in the loop!</Text>
				<View style = {{flexDirection: 'row'}}>
					{clickableIcon('T', 'https://twitter.com/cuhacking')}
					{clickableIcon('FB', 'https://www.facebook.com/cuhacking/')}
					{clickableIcon('IG', 'https://www.instagram.com/cuhacking/')}
				</View>
			</View>
		);
	}

	signInButton()
	{
		return (
			<View style = {{paddingVertical: 25}}>
				<Button
					label = "Sign In"
					color = {colors.primaryColor}
					labelColor = 'white'
					inverted = {false}
					action = {() => this.props.navigation.navigate("SignIn")}
				/>
			</View>
		);
	}

	render()
	{
		let {height, width} = Dimensions.get('window');
		let imageSize = width / 1.75;

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
						fadeDuration = {50}
						style = {{width: imageSize, height: imageSize}}
					/>
				</View>
				<View style = {containerStyle.screenSection}>
					<View style = {[containerStyle.textBox, {marginTop: -15}]}>
						<Text style = {textStyle.bold(62, 'center', colors.primaryColor)}>cuHacking</Text>
					</View>
					<View style = {containerStyle.textBox}>
						<Text style = {textStyle.bold(24, 'center')}>February 16th - 17th 2019</Text>
						<Text style = {textStyle.light(24, 'center')}>Carleton University</Text>
					</View>
				</View>
				<View style = {containerStyle.screenSection}>
					{this.signInButton()}
					{this.socialLinks()}
				</View>
			</View>
		);
	}
}

export default withNavigation(LogoSection);