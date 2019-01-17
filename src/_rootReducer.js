import {combineReducers} from 'redux';
import authenticationStatus from './loadingScreen/reducers';

export default combineReducers({
    ...authenticationStatus
});