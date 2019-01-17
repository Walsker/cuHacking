// React Native imports
import React, {Component} from 'react';
import {Alert, AsyncStorage, StyleSheet, Text, View} from 'react-native';

// Redux imports
import {connect} from 'react-redux';
import {setAuthStatus} from './actions';

// Firebase imports
import firebase from '@firebase/app';
import '@firebase/auth';

// Custom imports
import {colors, textStyle} from 'cuHacking/src/common/appStyles';
import AUTH_TYPES from './authTypes';

class LoadingPage extends Component
{
	authenticationFailed()
	{
		Alert.alert(
			"Invalid QR code",
			"Please be sure to scan the QR code provided in your invitation email",
			[{text: 'OK', onPress: () => this.props.navigation.navigate("SignIn")}],
			{cancelable: false}
		);
	}

	authenticate(email, password)
	{
		// A method for creating an account if it's the first time logging
		const createAccount = () =>
			firebase.auth().createUserWithEmailAndPassword(email, password).catch(this.authenticationFailed.bind(this));

		// Attempting to sign in the user
		firebase.auth().signInWithEmailAndPassword(email, password).then().catch(createAccount);
		// this.props.navigation.navigate("Main"); // TODO: wait until promise returns okay
	}

	componentDidMount()
	{
		console.log("Mounted");
		

		return;
		var qrCode = qrCodeRaw.data.split("|");

		if (qrCode[0] == "Zs2UtedQrvfJzDpXQ7WR6aeEBi33")
		{
			console.log(qrCode);
			this.authenticate(qrCode[1], qrCode[2]);
		}
		else this.authenticationFailed();
	}

	render()
	{
		return (
			<View style = {styles.default}>
				<Text style = {textStyle.regular(32, 'center', 'white')}>loading...</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) =>
{
	return {
		credentials: state.qrCode
	};
};
export default connect(mapStateToProps, {setAuthStatus})(LoadingPage);


const styles = StyleSheet.create(
{
	default:
	{
		flex: 1,
		backgroundColor: colors.primaryColor,
		justifyContent: 'center',
		alignItems: 'center'
	},
});