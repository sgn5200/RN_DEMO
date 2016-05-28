import React,{Component} from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native';

export default class LikeCount extends Component{
    //构造函数    
    constructor(params) {
        super(params);
        this.state={
            likes:0
        };
    }
    
    
    onClick (){
        this.setState({likes:this.state.likes + 1});
    }
    
    render(){
        
        const msg='\uD83D\uDC4D';
        
        return(
            <View style = {styles.likeContainer}>
                <TouchableOpacity style = {styles.likeButton} onPress={this.onClick.bind(this)}>
                    <Text style={styles.likesText}> {msg+' Like'} </Text>                
                
                </TouchableOpacity>
                    <Text style = {styles.likesText}>{this.state.likes+" 个喜欢"}</Text>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    likeButton:{
        backgroundColor:'rgba(0,0,0,0.1)',
        borderColor:'#333333',
        borderWidth:1,
        borderRadius:5,
        flex:1,
        margin:8,
        padding:8
    },
    
    likeContainer:{
        flexDirection:'row'
    },
    
    likesText:{
        flex:1,
        fontSize:18,
        alignSelf:'center'
    }
    
    
    
});