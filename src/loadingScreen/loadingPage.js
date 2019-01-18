// React Native imports
import React, {Component} from 'react';
import {ActivityIndicator, Alert, StyleSheet, View} from 'react-native';

// Redux imports
import {connect} from 'react-redux';
import {deleteCredentials} from 'cuHacking/src/preAuth/signInScreen/actions';

// Firebase imports
import firebase from '@firebase/app';
import '@firebase/auth';

// Custom imports
import {colors} from 'cuHacking/src/common/appStyles';
import NULL_CREDENTIALS from 'cuHacking/src/preAuth/signInScreen/nullCredentials';

class LoadingPage extends Component
{
	authFailure()
	{
		this.props.deleteCredentials();
		Alert.alert(
			"Authentication Failed",
			"Scan your QR ID code again.\n\nIf this persists, please contact <support email> for help",
			[{text: 'OK', onPress: () => this.props.navigation.navigate("Landing")}],
			{cancelable: false}
		);
	}

	authSuccess()
	{
		this.props.navigation.navigate("Main");
	}

	authenticate()
	{
		// Retrieving the credentials from state
		var {email, password} = this.props.credentials;

		// Sending the authentication request to firebase
		firebase.auth().signInWithEmailAndPassword(email, password).then(this.authSuccess.bind(this)).catch(this.authFailure.bind(this));
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
export default connect(mapStateToProps, {deleteCredentials})(LoadingPage);


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