import * as ACTION_TYPES from './actionTypes';

// Updates the schedule on the app with the provided schedule
export const updateSchedule = (newEventList) =>
{
	console.log("Incoming: ", newEventList);
	
	// Sorting Schedule
	let events = newEventList.sort((x, y) => x.start.valueOf() - y.start.valueOf());
	console.log("Sorted: ", events);
	return {
		type: ACTION_TYPES.UPDATE_SCHEDULE,
		payload: events
	};
};