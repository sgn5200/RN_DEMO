/**
 * guangneng
 * 2016-05-28 15:27:26
 * Lesson 24
 */

import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class HomeUI extends Component{
    
    goBack(){
        const { navigator } = this.props;
        
        if(navigator){
            navigator.pop();
        }
        
    }
    
    render(){
        return (
          <View style = {styles.container}>  
            
                 <Text style= { styles.welcome} onPress={this.goBack.bind(this)}>Welcome to Lesson24</Text>
                    
                 <Text style= { styles.instructions}>Learn React Native {'\n'}2016-05-28 15:25:06</Text>
             
                 <Text>Press xxxx to reload,{'\n'} shake for dev menu</Text>
                    
          </View>  
        );
    }
}


const styles = StyleSheet.create({
    
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#f5fcff',  
    },
    
    welcome:{
        fontSize:30,
        textAlign:'center',
        margin:10
    },
    
    instructions:{
        textAlign:'center',
        color:'#333333',
        marginBottom:5,
    }
});