// React Native imports
import React, {Component} from 'react';
import {Alert, Dimensions, Image, Linking, Text, TouchableOpacity, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import {Divider} from 'cuHacking/src/common';

export default class SponsorsPage extends Component
{
	constructor(props)
	{
		super(props);
		
		var {height, width} = Dimensions.get('window');
		this.state = 
		{
			screenWidth: width,
			screenHeight: height
		}
	}

	hyperlinkError()
	{
		Alert.alert(
			"Uh oh!",
			"Could not open browser.",
			[{text: 'OK', onPress: () => {}}],
			{cancelable: true}
		);
	}

	createMegaImage(image, url, customHeight)
	{
		var size = this.state.screenWidth / 1.2;
		dimensions = {width: this.state.screenWidth / 1.2};
		if (customHeight)
			dimensions.height = customHeight;

		var hyperlink = url ?
			() => Linking.openURL(url).catch(err => console.error('Could not open link', err))
			: () => {};

		return (
			<TouchableOpacity onPress = {hyperlink}>
				<Image
					source = {image}
					resizeMode = 'contain'
					fadeDuration = {0}
					style = {{width: size}}
				/>
			</TouchableOpacity>
		);
	}

	createMicroImage(image, url)
	{
		var size = this.state.screenWidth / 1.5;
		console.log(size);
		var hyperlink = url ?
			() => Linking.openURL(url).catch(() => this.hyperlinkError())
			: () => {};

		return (
			<TouchableOpacity onPress = {hyperlink}>
				<Image
					source = {image}
					resizeMode = 'contain'
					fadeDuration = {0}
					style = {{width: size}}
				/>
			</TouchableOpacity>
		);
	}

	render()
	{
		return (
			<View>
				<View style = {[containerStyle.screen, {backgroundColor: colors.primaryColor}]}>
					<View style = {containerStyle.textBox}>
						<Text style = {textStyle.bold(42, 'center', 'white')}>Sponsors</Text>
					</View>
				</View>
				<View style = {containerStyle.screen}>
					<View style = {containerStyle.screenSection}>
					{this.createMegaImage(require('cuHacking/assets/images/sponsors/MN-Logo-Black.png'), 'https://www.google.ca')}
					</View>
					<View style = {containerStyle.screenSection}>
						{this.createMicroImage(require('cuHacking/assets/images/sponsors/ea.png'), 'https://www.ea.com/en-ca')}
						{this.createMicroImage(require('cuHacking/assets/images/sponsors/invision-logo.png'), 'https://www.invisionapp.com/')}
					</View>
					<Divider color = {colors.primaryTextColor}/>
					<View style = {containerStyle.textBox}>
						<Text style = {textStyle.bold(42, 'center')}>Partners</Text>
					</View>
					<Divider color = {colors.primaryTextColor}/>
					<View style = {containerStyle.screenSection}>
						{this.createMicroImage(require('cuHacking/assets/images/partners/carleton_sce.png'), 'https://carleton.ca/sce/')}
						{this.createMicroImage(require('cuHacking/assets/images/partners/carleton_scs.png'), 'https://carleton.ca/scs/')}
						{this.createMicroImage(require('cuHacking/assets/images/partners/mlh.png'), 'https://mlh.io/')}
					</View>
				</View>
			</View>
		);
	}
}