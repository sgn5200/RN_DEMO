/**
 * guangneng
 * 2016-05-28 15:27:26
 * Lesson 24
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var navigator;

import WelcomeSwiper from './WelcomeSwiper';
import IndexView from './IndexView';
import Button from '../view_module/Button';
import Toast from 'react-native-root-toast';


export default class HomeUI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: null,
        }
        navigator = this.props.navigator;
    }

    goBack() {


        // 通过调用 Toast.show(message, options); 可以在屏幕上显示一个toast，并返回一个toast实例
        Toast.show('My Toast', {
            duration: 2000, // toast显示时长
            position: Toast.positions.CENTER, // toast位置
            shadow: false, // toast是否出现阴影
            animation: true, // toast显示/隐藏的时候是否需要使用动画过渡
        });

        // 也可以通过调用Toast.hide(toast); 手动隐藏toast实例
        // setTimeout(function () {
        //     Toast.hide(toast);
        // }, 5000);


        // if (navigator) {
        //     navigator.push({
        //         name:"WelcomeSwiper",
        //         component:WelcomeSwiper,
        //     })
        // }

    }

    render() {
        if (!this.state.movies) {
            return this.renderLoadingView();
        }
        var movie = this.state.movies[0];
        return this.renderMovie(movie);
    }

    renderLoadingView() {
        return (
            <View style= {styles.container} >
                <Text>正在请求数据</Text>
            </View>
        )
    }

    //渲染一个item

    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: movie.posters.thumbnail }}
                    style={styles.thumbnail}/>

                <View style= {styles.rightContainer}>
                    <Text style={styles.title}>标题：{movie.title}</Text>
                    <Text style={styles.year}>{movie.year} 年</Text>


                </View>

                <Button
                    text='看狗'
                    onPress={this.goBack.bind(this) }
                    enabled={true}
                    />

            </View>

        );
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL).then((response) => response.json())
            .then((responseData) => {
                this.setState({ movies: responseData.movies });

            }).done();
    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },

    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    thumbnail: {
        width: 53,
        height: 81,
    },

    rightContainer: {
        flex: 1
    },

    title: {
        fontSize: 20,
        padding: 10,
        textAlign: 'center'
    },

    year: {
        textAlign: 'center'
    }



});