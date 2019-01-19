// Redux imports
import {combineReducers} from 'redux';

// Reducer imports
import loadingReducers from './loadingScreen/reducers';
import signInReducers from './preAuth/signInScreen/reducers'
import tabNavReducers from './postAuth/tabNavigation/reducers'

export default combineReducers({
	...loadingReducers,
	...signInReducers,
	...tabNavReducers
});