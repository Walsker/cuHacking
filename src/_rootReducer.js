// Redux imports
import {combineReducers} from 'redux';

// Reducer imports
import signInReducers from './preAuth/signInScreen/reducers'
import tabNavReducers from './postAuth/tabNavigation/reducers'

export default combineReducers({
	...signInReducers,
	...tabNavReducers
});