// React Native imports
import React, {Component} from 'react';
import {Alert, AsyncStorage, StyleSheet, Text, View} from 'react-native';

// Redux imports

// Firebase imports
import firebase from '@firebase/app';
import '@firebase/auth';

// Custom imports
import {colors, textStyle} from 'cuHacking/src/common/appStyles';

export default class LoadingPage extends Component
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
		// this.props.navigation.navigate("Main");
	}

	fetchCredentials()
	{
		retrieveQRCode = async () =>
		{
			try
			{
				console.log("Attemping to fetch data....");
				const value = await AsyncStorage.getItem('credentials');
				
				if (value !== null)
				{
					// We have data!!
					console.log("Data Retrieved", value);
					return value;
				}
				else 
				{
					console.log("Data is null");
					return null
				}
			}
			catch (error)
			{
				console.log("Error in fetch", error);
				return error;
			}
		}

		console.log(retrieveQRCode());
	}
	componentDidMount()
	{
		// const { navigation } = this.props;
		// const qrCodeRaw = navigation.getParam('qrCode', {qrCode: 'none'});

		// var qrCode = qrCodeRaw.data.split("|");

		// if (qrCode[0] == "Zs2UtedQrvfJzDpXQ7WR6aeEBi33")
		// {
		// 	console.log(qrCode);
		// 	this.authenticate(qrCode[1], qrCode[2]);
		// }
		// else this.authenticationFailed();

		console.log("Mounted");
		AsyncStorage.setItem('credentials', "QR CODE");
		this.fetchCredentials();
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