// React Native imports
import React, {Component} from 'react';
import {Text, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';

export default class FAQPage extends Component
{
    render()
    {
        return (
            <View>
                <View style = {[containerStyle.screen, {backgroundColor: colors.primaryColor}]}>
                    <View style = {containerStyle.textBox}>
                        <Text style = {textStyle.bold(42, 'center', 'white')}>FAQ</Text>
                    </View>
                </View>
                <View style = {containerStyle.screen}>
                    <View style = {containerStyle.screenSection}>
                        <View style = {{height: 500}}/>
                    </View>
                </View>
            </View>
        );
    }
}