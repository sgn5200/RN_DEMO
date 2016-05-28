/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ViewPagerAndroid,
    Navigator,

} from 'react-native';

import Button from './view_module/Button';
import Header from './view_module/Header'
import LikeCount from './view_module/LikeCount';
import HomeUI from './view_module/HomeUI';


const PAGES = 5;

const BG_COLOR = ['#fdb08e', '#aa2277', '#3399aa', "#f14a9f", '#aa77ff'];

const IMAGE_URIS = [
    'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
    'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
    'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
];

export default class IndexView extends Component {
    constructor(props) {
        super(props);
        state = {
            animationsAreEnabled: true
        };
    }

    pressHeader() {
        alert("clicked me");
    }

    render() {
        return (
            <View style={styles.container}>

                <Header text='   Lesson24 !'
                    onPress={this.pressHeader.bind(this) }
                    />

                <LikeCount/>

                <Button
                    text="Turn off animations"
                    enabled={true}
                    onPress={() => this.setState({ animationsAreEnabled: false }) }
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    welcome: {
        backgroundColor: 0xaabbcc,
        padding: 5
    },


    font: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },


    buttons: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    image: {
        width: 300,
        height: 200,
        padding: 20
    },

    startipButton: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderColor: '#333333',
        borderWidth: 1,
        margin: 8,
        padding: 8,
        borderRadius: 5,
    },

    progressBarContainer: {
        height: 20,
        margin: 5,
        borderColor: '#eeeeee',
        borderWidth: 2,
    },

    progressBar: {
        alignSelf: 'flex-start',
        flex: 1,
    },

    viewPager: {
        flex: 1
    },

    buttonText: {
        color: 'white'
    }

});



