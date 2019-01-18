import {SWITCH_TAB} from '../actionTypes';

export default (prevState = "Badge", action) =>
{
    switch (action.type)
    {
        case SWITCH_TAB:
            return action.payload;

        default:
            return prevState;
    }
}