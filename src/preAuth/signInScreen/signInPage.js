// React Native imports
import React, {Component} from 'react';
import {ActivityIndicator, Alert, StatusBar, StyleSheet, Text, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

// Redux imports
import {connect} from 'react-redux';
import {setCredentials} from './actions';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import {CameraMarker} from './components';
import INVITE_KEY from 'cuHacking/$invite';

class SignInPage extends Component
{
	constructor(props)
	{
		super(props);

		this.scannerRef = React.createRef();
		this.state = {scanStatus: 'IDLE', useCamera: true};
	}
	
	processCode(code)
	{
		// Indicating that the code is being processed
		this.setState({scanStatus: 'LOADING'});

		// Extracting the data from the QR code
		var data = code.data.split("|");
		
		const reactivate = () =>
		{
			this.setState({scanStatus: 'IDLE'});
			this.scannerRef.current.reactivate();
		}
		
		// Checking if the QR code is in the correct format
		if (data[0] != INVITE_KEY || (data[1] == null || data[2] == null))
		{
			// Indicating that the scan failed
			this.setState({scanStatus: 'FAILURE'});

			// Displaying an error message
			Alert.alert(
				"Invalid QR Code",
				"Please scan your personal code provided via email.",
				[{text: 'OK', onPress: reactivate}],
				{cancelable: false}
			);
		}
		else
		{
			// Saving the QR code to the device and moving to the loading screen
			this.props.setCredentials(data);
			this.setState({scanStatus: 'IDLE'})
			this.props.navigation.navigate("Loading");
		}
	}

	render()
	{
		return (
			<View style = {containerStyle.default}>
				<StatusBar barStyle = 'light-content'/>
				<View style = {localStyle.cameraSpace}>
					<QRCodeScanner
						ref = {this.scannerRef}
						fadeIn = {false}
						onRead = {this.processCode.bind(this)}
						showMarker
						customMarker = {<CameraMarker mode = {this.state.scanStatus}/>}
						cameraStyle = {localStyle.camera}
					/>
				</View>
				<View style = {localStyle.prompt}>
					<Text style = {textStyle.light(24, 'center', 'white')}>Please scan your invite code.</Text>
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
	camera: {height: '100%'}
});