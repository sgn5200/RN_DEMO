/**
 * guangneng
 * Lesson 24
 * 2016-05-28 17:33:53
 * 
 */

import React, {Component} from 'react';
import {
    Navigator,
} from 'react-native';

import WelcomeUI from './WelcomeUI';

export default class MainPage extends Component {
    render() {
        let defaultName = 'WelcomeUI';
        let defaultCompont = WelcomeUI;

        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultCompont }}
                //配置场景
                configureScene={
                    (route) => {

                        //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
                        return Navigator.SceneConfigs.FloatFromRight;
                    }
                }

                renderScene = {
                    (route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator}/>
                    }
                }

                />
        );
    }
}