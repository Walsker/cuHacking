// React Native imports
import React, {Component} from 'react';
import {ActivityIndicator, Alert, StatusBar, StyleSheet, Text, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

// Redux imports
import {connect} from 'react-redux';
import {setCredentials} from './actions';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import INVITE_KEY from 'cuHacking/$invite';

class SignInPage extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {useCamera: true};
	}
	
	// A method for processing the scanned QR code
	processCode(code)
	{
		// Disabling the camera
		this.setState({useCamera: false});

		// Extracting the data from the QR code
		var data = code.data.split("|");
		
		// Checking if the QR code is in the correct format
		if (data[0] != INVITE_KEY || (data[1] == null || data[2] == null))
		{
			// Displaying an error message
			Alert.alert(
				"Invalid QR Code",
				"Please scan your personal code provided via email.",
				[{text: 'OK', onPress: () => this.setState({useCamera: true})}],
				{cancelable: false}
			);
		}
		else
		{
			// Saving the QR code to the device and moving to the loading screen
			this.props.setCredentials(data);
			this.props.navigation.navigate("Loading");
		}
	}

	renderCamera()
	{
		if (this.state.useCamera)
		{
			return (
				<QRCodeScanner
					ref = {(node) => {this.scanner = node}}
					fadeIn = {false}
					onRead = {this.processCode.bind(this)}
					showMarker
					markerStyle = {localStyle.cameraMarker}
					cameraStyle = {localStyle.camera}
				/>
			);
		}
		else return <ActivityIndicator color = {colors.primaryColor} size = 'large'/>;
	}

	render()
	{
		return (
			<View style = {containerStyle.default}>
				<StatusBar barStyle = 'light-content'/>
				<View style = {localStyle.cameraSpace}>
					{this.renderCamera()}
				</View>
				<View style = {localStyle.prompt}>
					<Text style = {textStyle.light(20, 'center', 'white')}>Please scan your invitation QR code.</Text>
				</View>
			</View>
		);
	}
}

export default connect(null, {setCredentials})(SignInPage);


const localStyle = StyleSheet.create(
{
	prompt:
	{
		flex: 0.1,
		backgroundColor: colors.primaryColor,
		justifyContent: 'center',
		alignItems: 'center'
	},
	cameraSpace:
	{
		flex: 0.9,
		justifyContent: 'center',
		backgroundColor: colors.primarySpaceColor
	},
	camera: {height: '100%'},
	cameraMarker: {borderColor: 'white'}
});