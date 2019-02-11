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
			scheduleComponents: [<View/>]
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
			<View key = {"Hour: " + hour} style = {localStyle.hourStamp}>
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
			<View key = {"Day: " + day} style = {localStyle.dayStamp}>
				<Text style = {textStyle.bold(21, 'left', colors.primaryColor)}>February {day}th</Text>
				<View style = {localStyle.dayDivider}/>
			</View>
		);
	}

	createEvent(eventObject)
	{
		console.log("event: ", eventObject);
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
			<View 
				key = {"Event: " + eventObject.title}
				style = {localStyle.eventTile}
			>
				<Text style = {textStyle.bold(21, 'left', 'white')}>{eventObject.title}</Text>
				<Text style = {textStyle.regular(18, 'left', 'white')}>
					{formatTime(eventObject.start.getHours(), eventObject.start.getMinutes())} - {formatTime(eventObject.end.getHours(), eventObject.end.getMinutes())} | {eventObject.location}
				</Text>
			</View>
		);
	}

	renderSchedule()
	{
		// Containers for the schedule components
		let scheduleComponents = [];
		let eventsInHour = [];

		// Keeping track of the date of the last event
		let currentDay = -1;
		let currentHour = 0; // 24 hour time

		// Generating all the event components
		for (event of this.props.eventList)
		{
			// Checking if we need to define a new day
			if (currentDay != event.start.getDate())
			{
				// Adding all the previous hour's events to the schedule
				if (eventsInHour.length != 0)
				{
					scheduleComponents.push(
						<View 
							key = {currentDay + " " + currentHour}
							style = {localStyle.hourSection}
						>
							{this.createHourStamp(currentHour)}
							<View style = {localStyle.tileWrapper}>
								{eventsInHour}
							</View>
						</View>
					);
				}
				
				// Clearing the previous hour's component list
				eventsInHour = [];

				// Setting the new current day and resetting the hour
				currentDay = event.start.getDate();
				currentHour = 0;

				// Adding a date component
				scheduleComponents.push(this.createDayStamp(currentDay));
			}

			if (currentHour != event.start.getHours())
			{
				// Adding all the previous hour's events to the schedule
				if (eventsInHour.length != 0)
				{
					scheduleComponents.push(
						<View 
							key = {currentDay + " " + currentHour}
							style = {localStyle.hourSection}
						>
							{this.createHourStamp(currentHour)}
							<View style = {localStyle.tileWrapper}>
								{eventsInHour}
							</View>
						</View>
					);
				}
				
				// Clearing the previous hour's component list
				eventsInHour = [];

				// Setting the currentHour
				currentHour = event.start.getHours();
			}
			
			// Adding the event to the current hour group
			eventsInHour.push(this.createEvent(event));
		}

		// Pushing the last events to the schedule component list
		if (eventsInHour.length != 0)
		{
			scheduleComponents.push(
				<View 
					key = {currentDay + " " + currentHour}
					style = {localStyle.hourSection}
				>
					{this.createHourStamp(currentHour)}
					<View style = {localStyle.tileWrapper}>
						{eventsInHour}
					</View>
				</View>
			);
		}

		return (
			<View>
				{scheduleComponents}
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