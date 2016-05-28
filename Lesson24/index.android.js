/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import IndexView from './IndexView';

class Lesson24 extends Component {
  render() {
    return (
      <IndexView/>
    );
  }
}
AppRegistry.registerComponent('Lesson24', () => Lesson24);
