// React Native imports
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Custom imports
import {colors, textStyle} from 'cuHacking/src/common/appStyles';

export default class UpdatesPage extends Component
{
    render()
    {
        return (
            <View style = {styles.default}>
                <Text>"LIVE UPDATES THAT WERE SENT OUT AS PUSH NOTIFICATIONS ARE DISPLAYED HERE IN REVERSE CHRONOLOGICAL ORDER"</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    default: 
    {
        flex: 1,
        backgroundColor: colors.primarySpaceColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
});