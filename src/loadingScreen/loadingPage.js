// React Native imports
import React, {Component} from 'react';
import {ActivityIndicator, Alert, StyleSheet, View} from 'react-native';

// Redux imports
import {connect} from 'react-redux';
import {saveHackerInfo} from './actions';
import {signOut} from 'cuHacking/src/preAuth/signInScreen/actions';

// Firebase imports
import firebase from 'firebase';

// Custom imports
import {colors} from 'cuHacking/src/common/appStyles';
import NULL_CREDENTIALS from 'cuHacking/src/preAuth/signInScreen/nullCredentials';

class LoadingPage extends Component
{
	displayError(type)
	{
		this.props.signOut();

		switch (type)
		{
			case "Auth Failure":
				Alert.alert(
					"Authentication Failed",
					"Scan your QR ID code again.\n\nIf this persists, please contact <support email> for help",
					[{text: 'OK', onPress: () => this.props.navigation.navigate("Landing")}],
					{cancelable: false}
				);
				return;
			
			case "Fetch Failure":
				Alert.alert(
					"Something went wrong",
					"Scan your QR ID code again.\n\nIf this persists, please contact <support email> for help",
					[{text: 'OK', onPress: () => this.props.navigation.navigate("Landing")}],
					{cancelable: false}
				);
				return;
		}
	}

	authSuccess()
	{
		var toMainApp = (hackerObject) =>
		{
			this.props.saveHackerInfo(hackerObject);
			this.props.navigation.navigate("Main");
		}

		// Retrieving account information from firebase
		firebase.database().ref("/hackers/hackerPW").once('value').then((snapshot) => toMainApp(snapshot.val())).catch(() => this.displayError("Fetch Failure"));
	}

	authenticate()
	{
		// Retrieving the credentials from state
		var {email, password} = this.props.credentials;

		// Sending the authentication request to firebase
		firebase.auth().signInWithEmailAndPassword(email, password).then(this.authSuccess.bind(this)).catch(() => this.displayError("Auth Failure"));
	}

	componentDidMount()
	{
		// Retrieving the credentials from state
		var {email, password} = this.props.credentials;

		// Checking if credentials have been saved to the device
		if (email == NULL_CREDENTIALS.email || password == NULL_CREDENTIALS.password)
			this.props.navigation.navigate("PreAuth");
		else this.authenticate();	
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
	console.log("MAP: ", state.credentials);
	
	return {
		credentials: state.credentials
	};
};
export default connect(mapStateToProps, {saveHackerInfo, signOut})(LoadingPage);


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