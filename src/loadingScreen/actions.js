import * as ACTION_TYPES from './actionTypes';

export const setAuthStatus = (authStatus) =>
{
    return {
        type: ACTION_TYPES.SET_AUTH_STATUS,
        payload: authStatus
    };
};