import {AppRegistry} from 'react-native';
import App from './src/_root';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// Added these because of an error with firebase
// // https://github.com/facebook/immutable-js/issues/1305#issuecomment-447593825
// global.Symbol = require('core-js/es6/symbol');
// require('core-js/fn/symbol/iterator');
// require('core-js/fn/map');
// require('core-js/fn/set');
// require('core-js/fn/array/find');