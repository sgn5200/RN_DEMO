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

import LikeCount from '../view_module/LikeCount';
import ProgressBar from '../view_module/ProgressBar';
import Button from '../view_module/Button'
import HomeUI from './HomeUI';
import Header from '../view_module/Header';
import WelcomeSwiper from './WelcomeSwiper';

const PAGES = 5;

const BG_COLOR = ['#fdb08e', '#aa2277', '#3399aa', "#f14a9f", '#aa77ff'];

const IMAGE_URIS = [
    'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
    'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
    'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
];

var navigator;

export default class WelcomeUI extends Component {
    //引导页 或者 欢迎界面  用viewpager实现
    //用构造函数来替代之前的 Initial实例化
    constructor(props) {
        super(props);
        navigator = this.props.navigator;
        this.state = {
            page: 0,
            animationsAreEnabled: true,//动画是否开启
            progress: {
                position: 0,
                offset: 0
            }
        };
    }

    ComponentWillMount() {
        console.log("component will mount");
    }

    // onPageSelected = (e) => {
    //     this.setState({ page: e.nativeEvent.position });
    // }


    onPageSelected = (e) => {
        //这个回调会在页面切换完成后（当用户在页面间滑动）调用
        //回调参数中的event.nativeEvent对象
        this.setState({ page: e.nativeEvent.position });
    }


    onPageScroll = (e) => {
        //当在页间切换时（不论是由于动画还是由于用户在页间滑动/拖拽）执行。

        //    回调参数中的event.nativeEvent对象会包含如下数据：
        //
        //position 从左数起第一个当前可见的页面的下标。
        //
        //offset 一个在[0,1)（大于等于0，小于1）之间的范围，代表当前页面切换的状态。值x表示现在"position"所表示的页有(1 - x)的部分可见，而下一页有x的部分可见。
        this.setState({ progress: e.nativeEvent });
    }

    move(delta) {
        var page = this.state.page + delta;
        this.go(page);
    }

    go(page) {
        if (this.state.animationsAreEnabled) {
            this.viewPager.setPage(page);
        } else {
            this.viewPager.setPageWithoutAnimation(page);
        }

        this.setState({ page });

    }


    onClick() {
        // alert("click");
        if (navigator) {
            navigator.push({
                name: "HomeUI",
                component: HomeUI,
            })
        }
    }

    setAnimation() {
        this.setState({ animationsAreEnabled: !this.state.animationsAreEnabled });
    }

    render() {
        const thunbsUp = '\uD83D\uDC4D';
        var pages = [];

        for (var i = 0; i < PAGES; i++) {
            var pageStyle = {
                backgroundColor: BG_COLOR[i % BG_COLOR.length],
                alignItems: 'center',
            };

            if (i < PAGES - 1) {
                pages.push(
                    <View key={i} style={pageStyle} collapsable={false}>
                        <Image style={styles.image} source={{ uri: IMAGE_URIS[i % BG_COLOR.length] }}/>

                        <LikeCount/>

                    </View>
                );
            } else {
                pages.push(
                    <View key={i} style={pageStyle} collapsable={false}>
                        <Image
                            style={styles.image}
                            source={{ uri: IMAGE_URIS[i % BG_COLOR.length] }}/>
                        <LikeCount/>

                        <TouchableOpacity onPress={this.onClick.bind(this) } style={styles.startipButton}>

                            <Text style={styles.likesText}>{thunbsUp + ' 启动首页'}</Text>
                        </TouchableOpacity>

                    </View>
                );
            }
        }

        var {page, animationsAreEnabled} = this.state;

        return (
            <View style={styles.container}>

                <Header text='Guangneng Demo Lesson24'/>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    onPageScroll={this.onPageScroll}
                    onPageSelected={this.onPageSelected}
                    ref={viewPager => { this.viewPager = viewPager; } }>
                    {pages}
                </ViewPagerAndroid>

                <View style={styles.buttons}>
                    {
                        animationsAreEnabled ?
                            <Button
                                text='turn off animations'
                                enabled={true}
                                onPress={this.setAnimation.bind(this) }/>
                            :
                            <Button
                                text='turn animations back on'
                                enabled={true}
                                onPress={this.setAnimation.bind(this) }/>
                    }
                </View>

                <View style={styles.buttons}>
                    <Button text='start' enabled={page > 0} onPress={() => this.go(0) }/>
                    <Button text='prev' enabled={page > 0} onPress={() => this.move(-1) }/>

                    <Text style={styles.buttonText}> 页：{page + 1} / {PAGES}</Text>
                    <ProgressBar size={50} progress={this.state.progress}/>

                    <Button text='text' enabled={page < PAGES - 1} onPress={() => this.move(1) }/>
                    <Button text='last' enabled={page < PAGES - 1} onPress={() => this.go(PAGES - 1) }/>
                </View>
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
        backgroundColor: 0xaa11cc,
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
        height: 40,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 1
    },

    image: {
        marginTop: 50,
        width: 350,
        height: 200,
        padding: 2,
        borderWidth: 2,
        borderColor: '#4f4f4f',
        borderRadius: 10
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