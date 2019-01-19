import {SWITCH_TAB} from '../actionTypes';
import {SIGN_OUT} from 'cuHacking/src/preAuth/signInScreen/actionTypes';

const INTIAL_SELECTION = "Badge";

export default (prevState = INTIAL_SELECTION, action) =>
{
    switch (action.type)
    {
        case SWITCH_TAB:
            return action.payload;

        case SIGN_OUT:
            return INTIAL_SELECTION;
        default:
            return prevState;
    }
}