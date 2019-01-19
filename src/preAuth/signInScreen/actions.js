import * as ACTION_TYPES from './actionTypes';

// Creates an action that deletes the saved credentials
export const signOut = () =>
{
	return {
		type: ACTION_TYPES.SIGN_OUT,
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