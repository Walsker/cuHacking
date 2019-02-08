import {UPDATE_SCHEDULE} from '../actionTypes';

export default (prevState = {}, action) =>
{
	console.log("TYPE: ", action.type);
	switch (action.type)
	{
		case UPDATE_SCHEDULE:
			console.log("UPDATING: ", action.payload);
			return action.payload;

		default:
			return prevState;
	}
};