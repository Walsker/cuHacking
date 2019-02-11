// React Native imports
import React, {Component} from 'react';
import {Dimensions, RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';

// Redux imports
import {connect} from 'react-redux';

// QR Code imports
import QRCode from 'react-native-qrcode-svg';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import {AndroidBar} from 'cuHacking/src/common';
import BADGE_KEY from 'cuHacking/$badge';

class BadgePage extends Component
{
	onRefresh()
	{
		this.props.navigation.navigate("Loading");
	}

	render()
	{
		let {width} = Dimensions.get("window");
		return (
			<View style = {containerStyle.tabPage}>
				<AndroidBar/>
				<ScrollView
					contentContainerStyle = {localStyle.pageLayout}
					refreshControl = {<RefreshControl colors = {[colors.primaryColor]} onRefresh={this.onRefresh.bind(this)}/>}
				>
					<View>
						<Text style = {textStyle.regular(48, 'center', colors.primaryTextColor)}>{this.props.name.first}</Text>
						<Text style = {textStyle.light(24, 'center', colors.primaryTextColor)}>{this.props.name.last}</Text>
					</View>
					<View style = {localStyle.codeDisplay}>
						<QRCode
							value = {BADGE_KEY + "|" + this.props.email}
							size = {width * 0.8}
							color = {colors.primaryColor}
							backgroundColor = {colors.lightSpaceColor}
						/>
					</View>
					<View>
						<Text style = {textStyle.light(24, 'center', colors.primaryTextColor)}>{this.props.school}</Text>
						<Text style = {textStyle.regular(42, 'center', colors.primaryTextColor)}>{this.props.program}</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const mapStateToProps = (state) =>
{	
	let {name, email, school, program} = state.hackerInfo;
	return {name, email, school, program};
};
export default connect(mapStateToProps)(BadgePage);


const localStyle = StyleSheet.create(
{
	pageLayout:
	{
		flex: 1,
		justifyContent: 'space-evenly'
	},
	codeDisplay:
	{
		backgroundColor: colors.lightSpaceColor,
		borderColor: colors.dividerColor + "22",
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		borderRadius: 10,
		borderWidth: 1,
		elevation: 1,
		padding: 10
	}
});