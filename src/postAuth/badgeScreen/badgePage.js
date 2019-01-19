// React Native imports
import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

// Redux imports
import {connect} from 'react-redux';

// QR Code imports
import QRCode from 'react-native-qrcode-svg';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import BADGE_KEY from 'cuHacking/badgeKey';

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
				<QRCode
					value = {BADGE_KEY + "|" + id}
					size = {width * 0.8}
					color = {colors.primaryTextColor}
					backgroundColor = {colors.lightSpaceColor}
				/>
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
});