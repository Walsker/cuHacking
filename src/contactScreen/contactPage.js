// React Native imports
import React, {Component} from 'react';
import {Text, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';

export default class ContactPage extends Component
{
    divider()
    {
        return (
            <View style = 
            {{
                height: 1.1,
                marginVertical: 25,
                marginHorizontal: 50,
                backgroundColor: 'white'
            }}/>
        );
    }

    composeEmailBox()
    {
        return (
            <View style = {containerStyle.inputArea}>
                <View style =
                {[
                    containerStyle.inputBox,
                    {
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        borderWidth: 1.1,
                        borderRadius: 10
                    }
                ]}>
                    <View style = {{height: 500}}/>
                </View>
            </View>
        );
    }

    render()
    {
        return (
            <View style = {[containerStyle.screen, {backgroundColor: colors.darkSpaceColor}]}>
                <View style = {containerStyle.screenSection}>
                    <View style = {containerStyle.textBox}>
                        <Text style = {textStyle.bold(42, 'center', 'white')}>Contact Us</Text>
                    </View>
                </View>
                {this.divider()}
                <View style = {containerStyle.screenSection}>
                    <View style = {containerStyle.textBox}>
                        <Text style = {textStyle.light(18, 'center', 'white')}>Have a question? Use the form below and we'll get back to you ASAP.</Text>
                    </View>
                    {this.composeEmailBox()}
                </View>
            </View>
        );
    }
}