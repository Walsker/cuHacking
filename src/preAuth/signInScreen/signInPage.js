// React Native imports
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

// Custom imports
import {colors, textStyle} from 'cuHacking/src/common/appStyles';

export default class SignInPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {useCamera: true};
    }

    processCode(code)
    {
        alert("Welcome!");
        console.log(code.data);
        this.setState({useCamera: false});

        this.props.navigation.navigate("Main");
    }

    renderCamera()
    {
        if (this.state.useCamera)
        {
            return (
                <QRCodeScanner
                    ref = {(node) => {this.scanner = node}}
                    onRead = {this.processCode.bind(this)}
                    showMarker
                    markerStyle = {styles.cameraMarker}
                    cameraStyle = {styles.camera}
                />
            );
        }
        else return <View/>;
    }

    render()
    {
        return (
            <View style = {styles.default}>
                <View style = {styles.cameraSpace}>
                    {this.renderCamera()}
                </View>
                <View style = {styles.prompt}>
                    <Text style = {textStyle.light(24, 'center', 'white')}>Please scan your QR ID code.</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
{
    default: {flex: 1},
    prompt:
    {
        flex: 0.1,
        backgroundColor: colors.primaryColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cameraSpace:
    {
        flex: 0.9,
        backgroundColor: colors.primarySpaceColor
    },
    camera: {height: '100%'},
    cameraMarker: {borderColor: 'white'}
});