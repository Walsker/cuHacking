// React Native imports
import React, {Component} from 'react';
import {Alert, Dimensions, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// Redux import
import {connect} from 'react-redux';
import {signOut} from 'cuHacking/src/preAuth/signInScreen/actions';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import {AndroidBar, Button, Divider} from 'cuHacking/src/common';

class MorePage extends Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			scrolled: false,
			innovapostLogo:
			{
				image: require('cuHacking/assets/images/sponsors/innovapost.png'),
				link: 'https://innovapost.com/'
			},
			// ------------------------------------------------------------------------------------
			cseLogo:
			{
				image: require('cuHacking/assets/images/sponsors/cse.png'),
				link: 'https://twitter.com/cse_cst'
			},
			marchLogo:
			{
				image: require('cuHacking/assets/images/sponsors/marchNetworks.png'),
				link: 'https://www.marchnetworks.com/'
			},
			qlikLogo:
			{
				image: require('cuHacking/assets/images/sponsors/qlikBranch.png'),
				link: 'https://developer.qlik.com/'
			},
			// ------------------------------------------------------------------------------------
			freshBooksLogo:
			{
				image: require('cuHacking/assets/images/sponsors/freshBooks.png'),
				link: 'https://www.freshbooks.com/'
			},
			// ------------------------------------------------------------------------------------
			eaLogo:
			{
				image: require('cuHacking/assets/images/sponsors/ea.png'),
				link: 'https://www.ea.com/en-ca'
			},
			inGeniusLogo:
			{
				image: require('cuHacking/assets/images/sponsors/inGenius.png'),
				link: 'https://www.ingenius.com/'
			},
			inVisionLogo:
			{
				image: require('cuHacking/assets/images/sponsors/inVision.png'),
				link: 'https://www.invisionapp.com/'
			},
			stickerMuleLogo:
			{
				image: require('cuHacking/assets/images/sponsors/stickerMule.png'),
				link: 'https://www.stickermule.com/uses/laptop-stickers?utm_source=sponsorship&utm_campaign=mlh-sponsorship&utm_medium=referral'
			},
			// ------------------------------------------------------------------------------------
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
		};
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

	signOut()
	{
		Alert.alert(
			"Are you sure?",
			"To sign back in, scan the invitation code you received via email.",
			[
				{text: 'No', onPress: () => {}},
				{text: 'Yes', onPress: () =>
				{
					this.props.signOut();
					this.props.navigation.navigate("Loading");
				}}
			]
		);
	}

	createLogo(image, url, size)
	{
		let hyperlink = () => Linking.openURL(url).catch(err => console.error('Could not open link', err))

		return (
			<TouchableOpacity
				onPress = {hyperlink}
			>
				<Image
					source = {image}
					resizeMode = 'contain'
					fadeDuration = {0}
					style = {{width: size * 1.5, height: size, alignSelf: 'center'}}
				/>
			</TouchableOpacity>
		);
	}

	render()
	{
		let {width} = Dimensions.get('window');
		let imageSize = width / 1.75;

		let logoDimensions = {height: imageSize};

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
						<View style = {localStyle.banner}>
							<Text style = {textStyle.bold(64, 'center', 'white')}>Sponsors</Text>
						</View>
						<View style = {localStyle.scrollSection}>
							{this.createLogo(this.state.innovapostLogo.image, this.state.innovapostLogo.link, imageSize)}
						</View>
						<Divider color = {colors.dividerColor}/>
						<View style = {localStyle.scrollSection}>
							{this.createLogo(this.state.cseLogo.image, this.state.cseLogo.link, imageSize)}
							{this.createLogo(this.state.marchLogo.image, this.state.marchLogo.link, imageSize)}
							{this.createLogo(this.state.qlikLogo.image, this.state.qlikLogo.link, imageSize)}
						</View>
						<Divider color = {colors.dividerColor}/>
						<View style = {localStyle.scrollSection}>
							{this.createLogo(this.state.freshBooksLogo.image, this.state.freshBooksLogo.link, imageSize)}
						</View>
						<Divider color = {colors.dividerColor}/>
						<View style = {localStyle.scrollSection}>
							{this.createLogo(this.state.eaLogo.image, this.state.eaLogo.link)}
							{this.createLogo(this.state.inGeniusLogo.image, this.state.inGeniusLogo.link, imageSize)}
							{this.createLogo(this.state.inVisionLogo.image, this.state.inVisionLogo.link, imageSize)}
							{this.createLogo(this.state.stickerMuleLogo.image, this.state.stickerMuleLogo.link, imageSize)}
						</View>
						<View style = {[localStyle.banner, {marginTop: 50}]}>
							<Text style = {textStyle.bold(64, 'center', 'white')}>Partners</Text>
						</View>
						<View style = {localStyle.scrollSection}>
							{this.createLogo(this.state.mlhLogo.image, this.state.mlhLogo.link, imageSize)}
							{this.createLogo(this.state.sceLogo.image, this.state.sceLogo.link, imageSize)}
							{this.createLogo(this.state.scsLogo.image, this.state.scsLogo.link, imageSize)}
						</View>
					</View>
					<View style = {localStyle.darkPage}>
						<View style = {[localStyle.scrollSection, {alignItems: 'center'}]}>
							<Image
								source = {require('cuHacking/assets/images/cuHacking-logo-inverse.png')}
								resizeMode = 'contain'
								fadeDuration = {0}
								style = {{width: imageSize, height: imageSize}}
							/>
						</View>
						<View style = {localStyle.scrollSection}>
							<Text style = {textStyle.bold(72, 'center', 'white')}>cuHacking</Text>
							<Text style = {textStyle.light(36, 'center', colors.primaryColor)}>Hacker App</Text>
						</View>
						<View style = {localStyle.scrollSection}>
							<Divider color = {colors.lightSpaceColor}/>
							<Text style = {textStyle.light(16, 'center', colors.lightSpaceColor)}>Created by Wal Wal</Text>
							<Text style = {textStyle.light(16, 'center', colors.lightSpaceColor)}>v1.0</Text>
						</View>
						<View style = {localStyle.scrollSection}>
							<Button
								label = "Sign out"
								color = {colors.primaryColor}
								labelColor = 'white'
								inverted = {false}
								action = {this.signOut.bind(this)}
							/>
						</View>
						<Divider color = {colors.darkSpaceColor}/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default connect(null, {signOut})(MorePage);


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
		// paddingTop: 25,
		elevation: 15,
		backgroundColor: colors.lightSpaceColor
	},
	darkPage:
	{
		paddingTop: 25,
		backgroundColor: colors.darkSpaceColor
	},
	banner:
	{
		marginVertical: 10,
		paddingVertical: 5,
		justifyContent: 'center',
		backgroundColor: colors.primaryColor
	}
});