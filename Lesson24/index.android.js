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

import MainPage from './page/MainPage';

class Lesson24 extends Component {
  render() {
    return (
      <MainPage/>
    );
  }
}
AppRegistry.registerComponent('Lesson24', () => Lesson24);
