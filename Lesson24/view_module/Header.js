/**
 * guangneng
 * 2016-05-27 18:17:26
 */

import React,{Component} from 'react';

import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
 
export default class Header extends Component{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            
            <View>
            
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.header}>
                
                    <Text style={styles.font}>{this.props.text}</Text>
                
                </View>
            </TouchableOpacity>
            
            </View>
        );
    }
}

const styles=StyleSheet.create({
   flex:{
       flex:1
   }, 
   
   header:{
       backgroundColor:0xaa88cc,
       padding:5
   },
   
   font:{
       textAlign:'center',
       fontSize:20,
       color:'white'
   }
});

