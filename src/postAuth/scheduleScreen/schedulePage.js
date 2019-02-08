// React Native imports
import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

// Redux imports
import {connect} from 'react-redux';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import {AndroidBar} from 'cuHacking/src/common';

class SchedulePage extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			scrolled: false,
			eventList:
			{
				"16-08-00":	// DD-HH-MM (Day Hour Minute)
				{
					0:
					{
						title: "Registration",
						startTime: {hour: 8, minute: 0},
						endTime: {hour: 10, minute: 0},
						location: "Atrium",
						description: "A longer, more thorough description of the event. May also have interesting links, tell hackers what to bring, or perhaps tell a joke."
					},
					2:
					{
						title: "Registration",
						startTime: {hour: 8, minute: 0},
						endTime: {hour: 10, minute: 0},
						location: "Atrium",
						description: "A longer, more thorough description of the event. May also have interesting links, tell hackers what to bring, or perhaps tell a joke."
					},
					3:
					{
						title: "Registration",
						startTime: {hour: 8, minute: 0},
						endTime: {hour: 10, minute: 0},
						location: "Atrium",
						description: "A longer, more thorough description of the event. May also have interesting links, tell hackers what to bring, or perhaps tell a joke."
					},
					4:
					{
						title: "Registration",
						startTime: {hour: 8, minute: 0},
						endTime: {hour: 10, minute: 0},
						location: "Atrium",
						description: "A longer, more thorough description of the event. May also have interesting links, tell hackers what to bring, or perhaps tell a joke."
					},
					5:
					{
						title: "Registration",
						startTime: {hour: 8, minute: 0},
						endTime: {hour: 10, minute: 0},
						location: "Atrium",
						description: "A longer, more thorough description of the event. May also have interesting links, tell hackers what to bring, or perhaps tell a joke."
					},
					6:
					{
						title: "Registration",
						startTime: {hour: 8, minute: 0},
						endTime: {hour: 10, minute: 0},
						location: "Atrium",
						description: "A longer, more thorough description of the event. May also have interesting links, tell hackers what to bring, or perhaps tell a joke."
					},
				},
				"16-12-00":	// DD-HH-MM (Day Hour Minute)
				{
					0:
					{
						title: "Another Event",
						startTime: {hour: 12, minute: 30},
						endTime: {hour: 13, minute: 30},
						location: "Atrium",
						description: "A longer, more thorough description of the event. May also have interesting links, tell hackers what to bring, or perhaps tell a joke."
					}
				},
				"17-16-00":	// DD-HH-MM (Day Hour Minute)
				{
					0:
					{
						title: "Closing Ceremonies",
						startTime: {hour: 16, minute: 0},
						endTime: {hour: 18, minute: 30},
						location: "Atrium",
						description: "A longer, more thorough description of the event. May also have interesting links, tell hackers what to bring, or perhaps tell a joke."
					}
				}
			}
		};
	}

	scrollToggle(event)
	{
		if (event.nativeEvent.contentOffset.y != 0)
		{
			if (!this.state.scrolled)
				this.setState({scrolled: true})					
		}
		else
		{
			if (this.state.scrolled)
				this.setState({scrolled: false})
		}
	}

	createHourStamp(hour) // 24h time
	{
		let hourString = "";
		let meridiem = "";

		if (hour >= 12)
		{
			hourString = (hour == 12 ? hour : hour - 12);
			meridiem = "pm"
		}
		else
		{
			hourString = (hour == 0 ? 12 : hour);
			meridiem = "am";
		}

		return (
			<View key = {Date.now().toString()} style = {localStyle.hourStamp}>
				<Text style = {textStyle.bold(24, 'center', colors.primaryTextColor)}>{hourString}</Text>
				<View style = {{marginTop: -10}}>
					<Text style = {textStyle.light(18, 'center', colors.secondaryTextColor)}>{meridiem}</Text>
				</View>
			</View>
		);
	}

	createDayStamp(day)
	{
		return (
			<View key = {Date.now().toString()} style = {localStyle.dayStamp}>
				<Text style = {textStyle.bold(21, 'left', colors.primaryColor)}>February {day}th</Text>
				<View style = {localStyle.dayDivider}/>
			</View>
		);
	}

	createEvent(eventObject)
	{
		let {startTime, endTime} = eventObject;
		const formatTime = (hour, minute) =>
		{
			let timeString = "";
			let postMeridiem = false;

			if (hour == 0 || hour == 12)
			{
				timeString += "12";
				if (hour == 12) postMeridiem = true;
			}
			else if (hour < 12)
				timeString += hour;
			else
			{
				timeString += (hour - 12);
				postMeridiem = true;
			}
			
			if (minute) timeString += (":" + minute);
			
			if (postMeridiem)
				timeString += "pm";
			else
				timeString += "am";

			return timeString;
		};

		return (
			<View key = {Date.now().toString()} style = {localStyle.eventTile}>
				<Text style = {textStyle.bold(21, 'left', 'white')}>{eventObject.title}</Text>
				<Text style = {textStyle.regular(18, 'left', 'white')}>
					{formatTime(startTime.hour, startTime.minute)} - {formatTime(endTime.hour, endTime.minute)} | {eventObject.location}
				</Text>
			</View>
		);
	}

	renderSchedule()
	{
		const padNumber = num => (num < 10 ? '0' + num : num);

		let scheduleComponent = [];

		for (let day = 16; day < 18; ++day)
		{
			let dayPlaced = false;
			for (let hour = 0; hour < 24; ++hour)
			{
				let eventsInHour = [];

				for (let min = 0; min < 60; ++min)
				{
					let key = day + '-' + padNumber(hour) + '-' + padNumber(min);
					if (this.props.eventList[key])
					{
						console.log("AHA! ", this.props.eventList[key]);
						for (event in this.props.eventList[key])
						{
							if (!dayPlaced)
							{
								scheduleComponent.push(this.createDayStamp(day));
								dayPlaced = true;
							}
	
							eventsInHour.push(this.createEvent(this.props.eventList[key][event]))
						}
					}
				}

				if (eventsInHour.length != 0)
				{
					scheduleComponent.push(
						<View style = {localStyle.hourSection}>
							{this.createHourStamp(hour)}
							<View style = {localStyle.tileWrapper}>
								{eventsInHour}
							</View>
						</View>
					);
				}
			}
		}

		return (
			<View>
				{scheduleComponent}
			</View>
		);
	}

	render()
	{
		return (
			<View style = {containerStyle.tabPage}>
				<AndroidBar color = {colors.lightSpaceColor} lifted = {this.state.scrolled}/>
				<ScrollView
					style = {localStyle.scrollBody}
					contentContainerStyle = {localStyle.scrollContent}
					showsVerticalScrollIndicator = {false}
					onScroll = {this.scrollToggle.bind(this)}
				>
					<View style = {localStyle.lightPage}>
						<View style = {localStyle.scrollSection}>
							<Text style = {textStyle.regular(48, 'center', colors.primaryTextColor)}>Schedule</Text>
						</View>
						<View style = {localStyle.scrollSection}>
							{this.renderSchedule()}
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}
const mapStateToProps = (state) =>
{
	console.log("Event List: ", state.eventList);
	return {
		eventList: state.eventList
	};
};
export default connect(mapStateToProps)(SchedulePage);


const localStyle = StyleSheet.create(
{
	scrollBody: {alignSelf: 'stretch'},
	scrollContent:
	{
		justifyContent: 'center'
	},
	scrollSection:
	{
		marginVertical: 10,
		justifyContent: 'center'
	},
	lightPage:
	{
		paddingTop: 25,
		elevation: 15,
		backgroundColor: colors.lightSpaceColor
	},
	hourStamp:
	{
		marginVertical: 10,
		marginHorizontal: 25
	},
	dayStamp:
	{
		margin: 10,
		marginTop: 15
	},
	dayDivider:
	{
		height: 2,
		width: '100%',
		backgroundColor: colors.primaryColor,
		borderColor: colors.primaryColor,
		borderRadius: 1,
		borderWidth: 1
	},
	hourSection:
	{
		flexDirection: 'row',
		marginTop: 10,
	},
	tileWrapper:
	{
		flex: 1,
		flexDirection: 'column'
	},
	eventTile:
	{
		flex: 1,
		marginRight: 20,
		marginVertical: 5,
		padding: 10,
		backgroundColor: colors.primaryColor,
		borderRadius: 5,
		elevation: 2
	}
});