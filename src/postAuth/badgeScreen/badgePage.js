// React Native imports
import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

// Redux imports
import {connect} from 'react-redux';

// QR Code imports
import QRCode from 'react-native-qrcode-svg';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import BADGE_KEY from 'cuHacking/$badge';

class BadgePage extends Component
{
	render()
	{
		var {firstName, lastName, school, program, id} = this.props.hackerObject;
		var {width} = Dimensions.get("window");
		return (
			<View style = {containerStyle.tabPage}>
				<View style = {localStyle.textBox}>
					<Text style = {textStyle.regular(48, 'center', colors.primaryTextColor)}>{firstName}</Text>
					<Text style = {textStyle.light(24, 'center', colors.primaryTextColor)}>{lastName}</Text>
				</View>
				<View style = {localStyle.codeDisplay}>
					<QRCode
						value = {BADGE_KEY + "|" + id}
						size = {width * 0.8}
						color = {colors.primaryColor}
						backgroundColor = {colors.lightSpaceColor}
					/>
				</View>
				<View style = {localStyle.textBox}>
					<Text style = {textStyle.light(24, 'center', colors.primaryTextColor)}>{school}</Text>
					<Text style = {textStyle.regular(42, 'center', colors.primaryTextColor)}>{program}</Text>
				</View>
			</View>
		);
	}
}

const mapStateToProps = (state) =>
{
	return {
		hackerObject: state.hackerInfo
	};
}
export default connect(mapStateToProps)(BadgePage);


const localStyle = StyleSheet.create(
{
	textBox:
	{
		paddingVertical: 50
	},
	codeDisplay:
	{
		backgroundColor: colors.lightSpaceColor,
		borderColor: colors.dividerColor,
		borderRadius: 10,
		borderWidth: 1,
		elevation: 1,
		padding: 10
	}
});