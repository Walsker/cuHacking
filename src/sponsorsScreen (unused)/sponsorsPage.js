// React Native imports
import React, {Component} from 'react';
import {Alert, Dimensions, Image, Linking, Text, TouchableOpacity, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';

export default class SponsorsPage extends Component
{
	constructor(props)
	{
		super(props);
		
		let {height, width} = Dimensions.get('window');
		this.state = 
		{
			screenWidth: width,
			screenHeight: height,
			marchLogo:
			{
				image: require('cuHacking/assets/images/sponsors/MN-Logo-Black.png'),
				link: 'https://www.marchnetworks.com'
			},
			eaLogo: 
			{
				image: require('cuHacking/assets/images/sponsors/ea.png'),
				link: 'https://www.ea.com/en-ca'
			},
			inVisionLogo: 
			{
				image: require('cuHacking/assets/images/sponsors/invision-logo.png'),
				link: 'https://www.invisionapp.com/'
			},
			sceLogo: 
			{
				image: require('cuHacking/assets/images/partners/carleton_sce.png'),
				link: 'https://carleton.ca/sce/'
			},
			scsLogo: 
			{
				image: require('cuHacking/assets/images/partners/carleton_scs.png'),
				link: 'https://carleton.ca/scs/'
			},
			mlhLogo: 
			{
				image: require('cuHacking/assets/images/partners/mlh.png'),
				link: 'https://mlh.io/'
			}
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

	createImageTier(logos)
	{
		let logoHeight = this.state.screenHeight / 4;
		let logoWidth = this.state.screenWidth / 1.2;
		let logosOnTier = logos.length;

		const createImage = (logo) =>
		{
			return (
				<TouchableOpacity
					key = {logo.link}
					onPress = {() => Linking.openURL(logo.link).catch(err => console.error('Could not open link', err))}
					style = {{marginHorizontal: 10}}
				>
					<Image
						source = {logo.image}
						resizeMode = 'contain'
						fadeDuration = {0}
						style = {{width: logoWidth / logosOnTier, height: logoHeight}}
					/>
				</TouchableOpacity>
			);
		}

		let tier = [];
		for (i in logos)
			tier[i] = createImage(logos[i]);

		return (
			<View style = {{marginVertical: 10, flexDirection: 'row'}}>
				{tier}
			</View>
		);
	}

	createMegaImage(image, url, customHeight)
	{
		let size = this.state.screenWidth / 1.2;
		dimensions = {width: this.state.screenWidth / 1.2};
		if (customHeight)
			dimensions.height = customHeight;

		let hyperlink = url ?
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
		let size = this.state.screenWidth / 1.5;
		// console.log(size);
		let hyperlink = url ?
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
						{this.createImageTier([this.state.marchLogo])}
						{this.createImageTier([this.state.eaLogo, this.state.inVisionLogo])}
					</View>					
				</View>
				<View style = {[containerStyle.screen, {backgroundColor: colors.primaryColor}]}>
					<View style = {containerStyle.textBox}>
						<Text style = {textStyle.bold(42, 'center', 'white')}>Partners</Text>
					</View>
				</View>
				<View style = {containerStyle.screen}>
					<View style = {containerStyle.screenSection}>
						{this.createImageTier([this.state.mlhLogo])}
						{this.createImageTier([this.state.sceLogo])}
						{this.createImageTier([this.state.scsLogo])}
					</View>
				</View>
			</View>
		);
	}
}