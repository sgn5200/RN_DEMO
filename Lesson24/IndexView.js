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

import Button from './view_module/Button';
import Header from './view_module/Header'
import LikeCount from './view_module/LikeCount';

export default class IndexView extends Component {
  constructor(props) {
    super(props);
    state={
      animationsAreEnabled:true
    };
  }
  
  pressHeader=()=>{
    alert("clicked me");
  }
  
  render() {
    return (
      <View style={styles.container}>
      
      <Header text=' Welcome to React Native Lesson24!'
              onPress={this.pressHeader}
      />
      
      <LikeCount/>
      
        <Button 
          text="Turn off animations"
          enabled={true}
          onPress={()=>this.setState({animationsAreEnabled:false})}
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
    backgroundColor:0xaabbcc,
    padding:5
  },
  

  font:{
    textAlign: 'center',
    fontSize: 20,
    color:'white'    
  },
  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
