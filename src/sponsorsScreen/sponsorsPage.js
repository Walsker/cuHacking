// React Native imports
import React, {Component} from 'react';
import {Text, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';

// TODO: Make add links (contact us, logos)
export default class SponsorsPage extends Component
{
    divider()
    {
        return (
            <View style = 
            {{
                height: 1.1,
                marginVertical: 25,
                marginHorizontal: 50,
                backgroundColor: colors.primaryTextColor
            }}/>
        );
    }

    render()
    {
        return (
            <View>
                <View style = {[containerStyle.screen, {backgroundColor: colors.primaryColor}]}>
                    <View style = {containerStyle.textBox}>
                        <Text style = {textStyle.bold(42, 'center', 'white')}>Sponsors</Text>
                    </View>
                </View>
                <View style = {containerStyle.screen}>
                    <View style = {containerStyle.screenSection}>
                        <View style = {containerStyle.textBox}>
                            <Text style = {textStyle.light(18, 'center')}>
                                By sponsoring cuHacking, your organization has the opportunity to advertise, run challenges and workshops, network with passionate students, and discover new project ideas. 
                                <Text style = {textStyle.bold(18, 'center')}> Contact us </Text>
                                if your company is interested in sponsoring cuHacking! 
                            </Text>
                        </View>
                    </View>
                    {this.divider()}
                    <View style = {containerStyle.screenSection}>

                    </View>
                    {this.divider()}
                    <View style = {containerStyle.textBox}>
                        <Text style = {textStyle.bold(42, 'center')}>Partners</Text>
                    </View>
                    <View style = {containerStyle.screenSection}>

                    </View>
                </View>
            </View>
        );
    }
}