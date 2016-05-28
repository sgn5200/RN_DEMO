


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,

} from 'react-native';

const PAGES = 5;
/**
 * 进度条
 */
export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var fractionalPosition = (this.props.progress.position + this.props.progress.offset);
        var progressBarSize = (fractionalPosition / (PAGES - 1)) * this.props.size;
        
        console.log("progressBarSize   "+ this.props.size );
        console.log("progressBarSize"+ progressBarSize);
        
        return (
            <View style = {[styles.progressBarContainer, { width: this.props.size }]}>

                <View style={[styles.progressBar, { width: progressBarSize }]}/>

            </View>

        );

    }
}


const styles = StyleSheet.create({

    progressBarContainer: {
        height: 20,
        margin:1,
        borderColor: '#eeeeee',
        borderWidth:1,
    },

    progressBar: {
        alignSelf: 'flex-start',
        backgroundColor: 'red',
        height:18,
        padding:1
    },

});