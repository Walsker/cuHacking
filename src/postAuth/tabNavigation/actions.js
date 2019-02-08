import * as ACTION_TYPES from './actionTypes';

// Creates an action that changes the selected tab
export const switchTab = (targetTab) =>
{
    return {
        type: ACTION_TYPES.SWITCH_TAB,
        payload: targetTab
    };
};