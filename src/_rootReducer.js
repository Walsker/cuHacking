// Redux imports
import {combineReducers} from 'redux';

// Redux Persist imports
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducer imports
import loadingReducers from './loadingScreen/reducers';
import scheduleReducers from './postAuth/scheduleScreen/reducers';
import signInReducers from './preAuth/signInScreen/reducers';
import tabNavReducers from './postAuth/tabNavigation/reducers';

const rootPersistConfig =
{
	key: 'root',
	storage,
	whitelist: ['credentials']
};

const rootReducer = combineReducers({
	...loadingReducers,
	...scheduleReducers,
	...signInReducers,
	...tabNavReducers
});

export default persistReducer(rootPersistConfig, rootReducer);