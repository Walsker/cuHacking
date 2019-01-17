// React Native imports
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Firebase imports
import {firebaseApp} from 'cuHacking/firebaseConfig';
const firebaseRef = firebaseApp.database().ref();
const connectionRef = firebaseApp.database().ref('.info/connected');

// Custom imports
import {colors, textStyle} from 'cuHacking/src/common/appStyles';

export default class LoadingPage extends Component
{
	render()
	{
		const { navigation } = this.props;
		const qrCodeRaw = navigation.getParam('qrCode', {qrCode: 'none'});
		
		var qrCode = qrCodeRaw.data.split("|");
		console.log(qrCode);

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