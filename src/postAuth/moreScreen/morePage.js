// React Native imports
import React, {Component} from 'react';
import {Alert, Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';

// Redux import
import {connect} from 'react-redux';
import {signOut} from 'cuHacking/src/preAuth/signInScreen/actions';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import {AndroidBar, Button, Divider} from 'cuHacking/src/common';

class MorePage extends Component
{
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

	render()
	{
		var {width} = Dimensions.get('window');
		var imageSize = width / 1.75;

		return (
			<View style = {containerStyle.tabPage}>
				<AndroidBar/>
				<ScrollView contentContainerStyle = {localStyle.pageLayout}>
					<View style = {[localStyle.pageSection, {alignItems: 'center'}]}>
						<Image
							source = {require('cuHacking/assets/images/cuHacking-logo.png')}
							resizeMode = 'contain'
							fadeDuration = {0}
							style = {{width: imageSize, height: imageSize}}
						/>
					</View>
					<View style = {localStyle.pageSection}>
						<Text style = {textStyle.bold(72, 'center')}>cuHacking</Text>
						<Text style = {textStyle.light(36, 'center', colors.primaryColor)}>Hacker App</Text>
					</View>
					<View style = {localStyle.pageSection}>
						<Divider color = {colors.dividerColor}/>
						<Text style = {textStyle.light(16, 'center', colors.secondaryTextColor)}>Created by Wal Wal</Text>
						<Text style = {textStyle.light(16, 'center', colors.secondaryTextColor)}>v1.0</Text>
					</View>
					<View style = {localStyle.pageSection}>
						<Button
							label = "Sign out"
							color = {colors.primaryColor}
							labelColor = 'white'
							inverted = {false}
							action = {this.signOut.bind(this)}
						/>
					</View>
					<Divider color = {colors.dividerColor}/>

				</ScrollView>
			</View>
		);
	}
}

export default connect(null, {signOut})(MorePage);


const localStyle = StyleSheet.create(
{
	pageLayout:
	{
		flex: 1,
		paddingTop: 25,
		justifyContent: 'flex-start'
	},
	pageSection:
	{
		marginVertical: 10,
		justifyContent: 'center'
	}
});