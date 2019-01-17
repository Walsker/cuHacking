// React Native imports
import React, {Component} from 'react';
import {ActivityIndicator, Alert, StyleSheet, View} from 'react-native';

// Redux imports
import {connect} from 'react-redux';
import {setAuthStatus} from './actions';

// Firebase imports
import firebase from '@firebase/app';
import '@firebase/auth';

// Custom imports
import {colors, textStyle} from 'cuHacking/src/common/appStyles';
import AUTH_TYPES from './authTypes';
import NULL_CREDENTIALS from 'cuHacking/src/preAuth/signInScreen/nullCredentials';

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
		
		if (this.props.credentials == NULL_CREDENTIALS)
			this.props.navigation.navigate("PreAuth");

		// If null creds
			// go to pre auth // done
		// else
			// attempt to authenticate
			// if sign in accepted
				// go to postAuth
			// else
				// invalid credentials, go to preAuth
		
		

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
				<ActivityIndicator
					size = 'large'
					color = 'white'
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) =>
{
	return {
		credentials: state.credentials
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