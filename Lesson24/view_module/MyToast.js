/**
 * 支持IOS android 的第三方 Toast
 * 
 * https://github.com/magicismight/react-native-root-toast
 * 
 * guangneng
 * 2016-05-30 18:17:02
 * 
 */

import React, {Component} from 'react-native';
import Toast from 'react-native-root-toast';

export default class MyToast extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            visible: true
        }), 2000); // show toast after 2s

        setTimeout(() => this.setState({
            visible: false
        }), 5000); // hide toast after 5s
    };

    render() {
        return <Toast
            visible={this.props.visible}
            position={50}
            shadow={false}
            animation={false}
            hideOnPress={true}
        >{this.props.ToastMessage}</Toast>;
    }
}


