import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';

export default class AndroidBar extends Component
{
	constructor(props)
	{
		super(props);

		this.state = 
		{
			styles: StyleSheet.create({
				default:
				{
					backgroundColor: this.props.color,
					width: 3000,
					height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
				},
				lifted:
				{
					backgroundColor: this.props.color,
					width: 3000,
					height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
					elevation: 5
				}
			})			
		};
	}

	render()
	{
		var barStyle;
		if (this.props.lifted)
			barStyle = this.state.styles.lifted;
		else
			barStyle = this.state.styles.default;

		console.log(barStyle);
		return(
			<View style = {barStyle}/>
		);
	}
}
