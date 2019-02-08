import {SAVE_HACKER_INFO} from '../actionTypes';
import {SIGN_OUT} from 'cuHacking/src/preAuth/signInScreen/actionTypes';

const NULL_HACKER_INFO =
{
    id: "",
    firstName: "",
    lastName: "",
    school: "",
    program: "",
    email: "",
    phone: ""
};

export default (prevState = NULL_HACKER_INFO, action) =>
{
    switch (action.type)
    {
        case SAVE_HACKER_INFO:
            return action.payload;
            
        case SIGN_OUT:
            return NULL_HACKER_INFO;

        default:
            return prevState;
    }
};