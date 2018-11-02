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
		const submitEmail = (email) =>
		{
			const validate = (text) =>
			{
				var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				if(emailRegex.test(text) === false)
				{
					Alert.alert(
						"Invalid Email",
						"Please enter a valid email address.",
						[{text: 'OK', onPress: () => {}}],
						{cancelable: true}
					);
					return false;
				}
				else
					return true;

			}

			if (validate(email))
				this.setState({emailSubmitted: true});
		}

		if (!this.state.emailSubmitted)
		{
			return (
				<View style = {containerStyle.inputArea}>
					<View style = {containerStyle.inputBox}>
						<Text style = {textStyle.regular(20, 'center', 'white')}>
							Sign up for updates.{'\n'}
							<Text style = {{fontSize: 16}}>
								No spam, we promise.
							</Text>
						</Text>
						<View style = {{marginTop: 5, marginBottom: 15}}>
							<TextInput
								style = {textStyle.light(22, 'center', 'white')}
								onChangeText = {(newText) => this.setState({email: newText})}
								keyboardType = 'email-address'
								placeholder = "fullname@email.com"
								placeholderTextColor = 'rgba(255, 255, 255, 0.5)'
								underlineColorAndroid = 'white'
							/>
							<Text style = {textStyle.regular(14, 'center', 'white')}>
								Email Address
							</Text>
						</View>
						<Button
							title = "Submit"
							color = {colors.primaryColor}
							onPress = {() => submitEmail(this.state.email)}
						/>
					</View>
				</View>
			);
		}
		else
		{
			return (
				<View style = {containerStyle.inputArea}>
					<View style = {containerStyle.inputBox}>
						<Text style = {textStyle.regular(20, 'center', 'white')}>
							You are now in our email list!
						</Text>
					</View>
				</View>
			);
		}
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
						source = {require('cuHacking/assets/images/cuHacking-t.png')}
						resizeMode = 'contain'
						fadeDuration = {0}
						style = {{width: imageSize, height: imageSize}}
					/>
				</View>
				<View style = {containerStyle.screenSection}>
					<View style = {containerStyle.textBox}>
						<Text style = {textStyle.bold(24, 'center')}>February 16th - 17th 2019</Text>
						<Text style = {textStyle.regular(24, 'center')}>@ Carleton University</Text>
					</View>
				</View>
				<View style = {{marginVertical: 5}}/>
				{this.emailBox()}
			</View>
		);
	}
}