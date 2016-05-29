/**
 * guangneng
 * 2016-05-29 15:44:02
 * use swiper demo
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


import Swiper from 'react-native-swiper';

const IMAGES = [
    'http://download.zhuokearts.com/Auction/2011/10/17/zc-7011-1351.jpg',
    'http://i2.qhimg.com/t0178fa202cb7d2b640.jpg',
    'http://pic.baike.soso.com/p/20131221/20131221090358-575305996.jpg'
];

export default class WelcomeSwiper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true}>
                <Image style={[{ flex: 1 }]} source={{ uri: IMAGES[0] }}/>

                <Image
                    style={{ flex: 1 }}
                    source={{ uri: IMAGES[1] }}/>

                <Image style={{flex:1}} source={{ uri: IMAGES[2] }}/>
            </Swiper>
        );
    }

}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        flex: 1
    }
});