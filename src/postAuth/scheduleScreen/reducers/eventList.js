import {UPDATE_SCHEDULE} from '../actionTypes';

export default (prevState = {}, action) =>
{
	switch (action.type)
	{
		case UPDATE_SCHEDULE:
			return action.payload;

		default:
			return prevState;
	}
};