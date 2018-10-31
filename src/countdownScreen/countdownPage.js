// React Native imports
import React, {Component} from 'react';
import {Dimensions, Text, View} from 'react-native';

// Custom imports
import {colors, containerStyle, textStyle} from 'cuHacking/src/common/appStyles';

export default class CountdownPage extends Component
{
    render()
    {
        var {height} = Dimensions.get('window');
        var screenheight = height / 2;
        return (
            <View style = {[
				containerStyle.screen,
				{
                    backgroundColor: 'black',
                    height: screenheight
				}
			]}>
            
            </View>
        );
    }
}