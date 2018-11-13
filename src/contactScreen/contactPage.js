// React Native imports
import React, {Component} from 'react';
import {Dimensions, Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';
import {Divider} from 'cuHacking/src/common';

// TODO: Add links to MLH Code of Conduct and GitHub
export default class ContactPage extends Component
{
    render()
    {
        var {height, width} = Dimensions.get('window');
        var imageSize = width / 2;
        
        return (
            <View style = {[containerStyle.screen, {backgroundColor: colors.darkSpaceColor, minHeight: height + StatusBar.currentHeight + 10}]}>
                <View style = {containerStyle.textBox}>
                    <Text style = {textStyle.bold(42, 'center', 'white')}>Contact Us</Text>
                </View>
                <Divider color = 'white'/>
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
                <Divider color = 'white'/>
                <View style = {containerStyle.screenSection}>
                    <View style = {containerStyle.textBox}>
                        <Text style = {textStyle.light(20, 'center', 'white')}>Questions?</Text>
                        <TouchableOpacity onPress = {() => alert("Test")}>
                            <Text style = {textStyle.regular(24, 'center', 'white')}>info@cuHacking.com</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Divider color = 'white'/>
                <View style = {containerStyle.screenSection}>
                    <TouchableOpacity onPress = {() => alert("test")}>
                        <View style = {containerStyle.textBox}>
                            <Text style = {textStyle.regular(24, 'center', 'white')}>MLH Code of Conduct</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {containerStyle.screenSection}>
                    <TouchableOpacity onPress = {() => alert()}>
                        <View style = {containerStyle.textBox}>
                            <Text style = {textStyle.regular(20, 'center', 'white')}>View us on GitHub</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}