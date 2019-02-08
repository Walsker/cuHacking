import {SIGN_OUT, SET_CREDENTIALS} from '../actionTypes';
import NULL_CREDENTIALS from '../nullCredentials';

export default (prevState = NULL_CREDENTIALS, action) => 
{
    console.log("creds");
    switch (action.type)
    {
        case SIGN_OUT:
            return NULL_CREDENTIALS;

        case SET_CREDENTIALS:
            return action.payload;
        
        default:
            return prevState;
    }
};