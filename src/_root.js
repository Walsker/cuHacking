// React Native imports
import React, {Component} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// Redux imports
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './_rootReducer';

// Firebase imports
import firebase from '@firebase/app';
import firebaseConfig from 'cuHacking/firebaseConfig';

// Custom imports
import {colors, containerStyle} from 'cuHacking/src/common/appStyles';
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

		return(
			<SafeAreaView style = {styles.safeView}>
				<Provider store = {store}>
					<View style = {styles.default}>
						<StatusBar
							translucent
							animated = {true}
							backgroundColor = "rgba(0, 0, 0, 0.2)"
						/>
						<RootNavigator/>
					</View>
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