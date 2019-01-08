// React Native imports
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// Custom imports
import {colors, textStyle} from 'cuHacking/src/common/appStyles';

export default class DisplayIDPage extends Component
{
    render()
    {
        return (
            <View style = {styles.default}>
                <View style = {styles.codeArea}>
                    <Text>"CODE"</Text>
                </View>
                <View style = {styles.description}>
                    <Text style = {textStyle.light(24, 'center')}>Your identification badge</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    default: 
    {
        flex: 1,
        backgroundColor: colors.primarySpaceColor
    },
    description:
    {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    codeArea:
    {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center'
    }
});