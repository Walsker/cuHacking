import * as ACTION_TYPES from './actionTypes';

// Updates the schedule on the app with the provided schedule
export const updateSchedule = (newEventList) =>
{
	console.log("Incoming: ", newEventList);
	return {
		type: ACTION_TYPES.UPDATE_SCHEDULE,
		payload: newEventList
	};
};