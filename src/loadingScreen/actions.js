import * as ACTION_TYPES from './actionTypes';

// Creates an action that saved the fetched hacker info to the store
export const saveHackerInfo = (hackerObject) =>
{
    return {
        type: ACTION_TYPES.SAVE_HACKER_INFO,
        payload: hackerObject
    };
}