import * as ACTION_TYPES from './actionTypes';

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