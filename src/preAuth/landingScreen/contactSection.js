// React Native imports
import React, {Component} from 'react';
import {Dimensions, Image, Linking, StatusBar, Text, TouchableOpacity, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import {Divider} from 'cuHacking/src/common';

export default class ContactSection extends Component
{
	render()
	{
		let {height, width} = Dimensions.get('window');
		let imageSize = width / 2.5;

		return (
			<View style = {[containerStyle.screen, {backgroundColor: colors.darkSpaceColor, minHeight: height}]}>
				<View style = {containerStyle.textBox}>
					<Text style = {textStyle.bold(42, 'center', 'white')}>Contact Us</Text>
				</View>
				<Divider color = 'white'/>
				<View style = {containerStyle.screenSection}>
					<Image
						source = {require('cuHacking/assets/images/cuHacking-logo-inverse.png')}
						resizeMode = 'contain'
						fadeDuration = {0}
						style = {{width: imageSize, height: imageSize}}
					/>
				</View>
				<View style = {containerStyle.screenSection}>
					<View style = {containerStyle.textBox}>
						<Text style = {textStyle.regular(24, 'center', 'white')}>Carleton University</Text>
						<Text style = {textStyle.light(18, 'center', 'white')}>1125 Colonel By Dr,</Text>
						<Text style = {textStyle.light(18, 'center', 'white')}>Ottawa, ON K1S 5B6</Text>
					</View>
				</View>
				<Divider color = 'white'/>
				<View style = {containerStyle.screenSection}>
					<View style = {containerStyle.textBox}>
						<Text style = {textStyle.light(20, 'center', 'white')}>Questions?</Text>
						<TouchableOpacity onPress = {() => Linking.openURL('mailto:info@cuHacking.com?subject=[Question]').catch(err => console.error('Could not go to github', err))}>
							<Text style = {textStyle.regular(24, 'center', 'white')}>info@cuHacking.com</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Divider color = 'white'/>
				<View style = {containerStyle.screenSection}>
					<TouchableOpacity onPress = {() => Linking.openURL('https://static.mlh.io/docs/mlh-code-of-conduct.pdf').catch(err => console.error('Could not go to github', err))}>
						<View style = {containerStyle.textBox}>
							<Text style = {textStyle.regular(24, 'center', 'white')}>MLH Code of Conduct</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style = {containerStyle.screenSection}>
					<TouchableOpacity onPress = {() => Linking.openURL('https://github.com/cuHacking').catch(err => console.error('Could not go to github', err))}>
						<View style = {containerStyle.textBox}>
							<Text style = {textStyle.regular(20, 'center', 'white')}>View us on GitHub</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}