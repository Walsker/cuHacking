import * as ACTION_TYPES from './actionTypes';

// Creates an action that deletes the saved credentials
export const deleteCredentials = () =>
{
	return {
		type: ACTION_TYPES.DELETE_CREDENTIALS,
		payload: null
	};
}

// Creates an action that saves the provided credentials
export const setCredentials = (qrCode) =>
{
	return {
		type: ACTION_TYPES.SET_CREDENTIALS,
		payload:
		{
			email: qrCode[1],
			password: qrCode[2]
		}
	};
};