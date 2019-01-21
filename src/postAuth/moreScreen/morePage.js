// React Native imports
import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

// Redux import
import {connect} from 'react-redux';
import {signOut} from 'cuHacking/src/preAuth/signInScreen/actions';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import {Button} from 'cuHacking/src/common';

// TODO: add refresh (re-fetch from firebase) button
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
		return (
			<View style = {containerStyle.tabPage}>
				<Text>More page</Text>
				<Button
					label = "Sign out"
					color = {colors.primaryColor}
					labelColor = 'white'
					inverted = {false}
					action = {this.signOut.bind(this)}
				/>
			</View>
		);
	}
}

export default connect(null, {signOut})(MorePage);


const localStyle = StyleSheet.create(
{

});