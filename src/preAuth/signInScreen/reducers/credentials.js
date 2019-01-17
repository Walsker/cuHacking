import {SET_CREDENTIALS} from '../actionTypes';

const NULL_CREDENTIALS = 
{
    email: 'N/A',
    password: 'N/A'
};

export default (prevState = NULL_CREDENTIALS, action) => 
{
    // console.log("credentialsReducer: ", action.type);
    switch (action.type)
    {
        case SET_CREDENTIALS:
            return action.payload;
        
        default:
            return prevState;
    }
};