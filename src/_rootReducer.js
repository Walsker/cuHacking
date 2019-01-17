// Redux imports
import {combineReducers} from 'redux';

// Reducer imports
import loadingReducers from './loadingScreen/reducers';
import signInReducers from './preAuth/signInScreen/reducers'

export default combineReducers({
    ...loadingReducers,
    ...signInReducers
});