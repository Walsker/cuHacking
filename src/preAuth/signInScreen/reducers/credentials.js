import {SET_CREDENTIALS} from '../actionTypes';
import NULL_CREDENTIALS from '../nullCredentials';

export default (prevState = NULL_CREDENTIALS, action) => 
{
    console.log("credentialsReducer: ", action.type);
    switch (action.type)
    {
        case SET_CREDENTIALS:
            return action.payload;
        
        default:
            return prevState;
    }
};