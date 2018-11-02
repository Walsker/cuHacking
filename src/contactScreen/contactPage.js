// React Native imports
import React, {Component} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';

// TODO: Add links to MLH Code of Conduct and GitHub
// TODO: Add direct email contact
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

    render()
    {
        var {height, width} = Dimensions.get('window');
        var imageSize = width / 2;
        
        return (
            <View style = {[containerStyle.screen, {backgroundColor: colors.darkSpaceColor}]}>
                <View style = {containerStyle.textBox}>
                    <Text style = {textStyle.bold(42, 'center', 'white')}>Contact Us</Text>
                </View>
                {this.divider()}
                <View style = {containerStyle.screenSection}>
					<Image
						source = {require('cuHacking/assets/images/cuHacking-t.png')}
						resizeMode = 'contain'
						fadeDuration = {0}
						style = {{width: imageSize, height: imageSize}}
					/>
				</View>
                <View style = {containerStyle.screenSection}>
                    <View style = {containerStyle.textBox}>
                        <Text style = {textStyle.regular(24, 'center', 'white')}>Carleton University</Text>
                        <Text style = {textStyle.light(18, 'center', 'white')}>1125 Colonel By Dr,</Text>
                        <Text style = {textStyle.light(18, 'center', 'white')}>Ottawa, ON K1S 5B6</Text>
                    </View>
                </View>
                <View style = {containerStyle.screenSection}>
                    <View style = {containerStyle.textBox}>
                        <Text style = {textStyle.regular(24, 'center', 'white')}>MLH Code of Conduct</Text>
                    </View>
                </View>
                <View style = {containerStyle.screenSection}>
                    <View style = {containerStyle.textBox}>
                        <Text style = {textStyle.regular(20, 'center', 'white')}>View us on GitHub</Text>
                    </View>
                </View>
            </View>
        );
    }
}