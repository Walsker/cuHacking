// React Native imports
import React, {Component} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';

// Custom imports
import {containerStyle} from 'cuHacking/src/common/appStyles';
import {AndroidBar} from 'cuHacking/src/common';
import LandingPage from './landingScreen/landingPage';

export default class App extends Component
{
    render()
    {
        return(
            <View style = {containerStyle.default}>
                <ScrollView>    
                    <AndroidBar/>
                    <StatusBar
                        translucent
                        animated
                        backgroundColor = "rgba(0, 0, 0, 0.2)"
                    />
                    <LandingPage/>
                </ScrollView>
            </View>
        );
    }
}