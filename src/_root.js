// React Native imports
import React, {Component} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// Redux imports
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './_rootReducer';

// Redux Persist imports
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react'

// Firebase imports
import firebase from '@firebase/app';
import firebaseConfig from 'cuHacking/firebaseConfig';

// Custom imports
import {colors} from 'cuHacking/src/common/appStyles';
import RootNavigator from './_rootNavigator';

export default class App extends Component
{
	componentDidMount()
	{
		SplashScreen.hide();
		firebase.initializeApp(firebaseConfig);
	}

	render()
	{
		const store = createStore(rootReducer);
		const persistor = persistStore(store);
		// persistor.purge();

		return(
			<SafeAreaView style = {styles.safeView}>
				<StatusBar
					translucent
					animated = {true}
					barStyle = 'dark-content'
					backgroundColor = 'transparent'
				/>
				<Provider store = {store}>
					<PersistGate loading = {<View style = {styles.safeView}/>} persistor = {persistor}>
						<View style = {styles.default}>
							<RootNavigator/>
						</View>
					</PersistGate>
				</Provider>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create(
{
	default: {flex: 1},
	safeView: {flex: 1, backgroundColor: colors.primaryColor}
});

// This disables the timer warning as a result of using the web sdk of firebase. Keep checking for a fix for this
console.ignoredYellowBox = ["Setting a timer"];