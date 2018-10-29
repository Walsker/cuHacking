// React Native imports
import React, {Component} from 'react';
import {Text, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';

export default class LandingPage extends Component
{
    render()
    {
        return (
            <View style = {[containerStyle.screen, {backgroundColor: colors.primarySpaceColor}]}>
                <View style = {containerStyle.screenSection}>
                    <Text style = {{fontFamily: 'Roboto-Medium'}}>February 16th - 17th 2019</Text>
                </View>
            </View>
        );
    }
}