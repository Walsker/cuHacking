import {SET_AUTH_STATUS} from '../actionTypes';
import AUTH_TYPES from '../authTypes';

export default (prevState = AUTH_TYPES.pending, action) =>
{
	switch (action.type)
	{
		case SET_AUTH_STATUS:
			return action.payload;

		default:
			return prevState;
	}
};