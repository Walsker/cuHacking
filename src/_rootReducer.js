import {combineReducers} from 'redux';
import loadingReducers from './loadingScreen/reducers';
import signInReducers from './preAuth/signInScreen/reducers'

export default combineReducers({
    ...loadingReducers,
    ...signInReducers
});