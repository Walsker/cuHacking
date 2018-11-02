// React Native imports
import React, {Component} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';

// TODO: Make add links (contact us, logos)
export default class SponsorsPage extends Component
{
	divider()
	{
		return (
			<View style =
			{{
				height: 1.1,
				marginVertical: 25,
				marginHorizontal: 50,
				backgroundColor: colors.primaryTextColor
			}}/>
		);
	}

	render()
	{
		var {height, width} = Dimensions.get('window');
		var teraTierSize = width / 1.2;

		return (
			<View>
				<View style = {[containerStyle.screen, {backgroundColor: colors.primaryColor}]}>
					<View style = {containerStyle.textBox}>
						<Text style = {textStyle.bold(42, 'center', 'white')}>Sponsors</Text>
					</View>
				</View>
				<View style = {containerStyle.screen}>
					<View style = {containerStyle.screenSection}>
						<Image
							source = {require('cuHacking/assets/images/ea.png')}
							resizeMode = 'contain'
							fadeDuration = {0}
							style = {{width: teraTierSize, height: teraTierSize}}
						/>
						<Image
							source = {require('cuHacking/assets/images/invisionapp.png')}
							resizeMode = 'contain'
							fadeDuration = {0}
							style = {{width: teraTierSize, height: teraTierSize}}
						/>
					</View>
					{this.divider()}
					<View style = {containerStyle.textBox}>
						<Text style = {textStyle.bold(42, 'center')}>Partners</Text>
					</View>
					<View style = {containerStyle.screenSection}>
						<Image
							source = {require('cuHacking/assets/images/carleton_sce.png')}
							resizeMode = 'contain'
							fadeDuration = {0}
							style = {{width: teraTierSize}}
						/>
						<Image
							source = {require('cuHacking/assets/images/carleton_scs.png')}
							resizeMode = 'contain'
							fadeDuration = {0}
							style = {{width: teraTierSize}}
						/>
						<Image
							source = {require('cuHacking/assets/images/mlh.png')}
							resizeMode = 'contain'
							fadeDuration = {0}
							style = {{width: teraTierSize, height: teraTierSize / 1.8}}
						/>
					</View>
				</View>
			</View>
		);
	}
}