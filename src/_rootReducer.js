// Redux imports
import {combineReducers} from 'redux';

// Reducer imports
import signInReducers from './preAuth/signInScreen/reducers'

export default combineReducers({
	...signInReducers
});