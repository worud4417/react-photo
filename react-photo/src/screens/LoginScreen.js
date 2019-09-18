import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import * as permissions from 'expo-permissions';
import {connect} from 'react-redux';
import ActionCreator from '../actions'

class LoginScreen extends React.Component{
    constructor(props){
        super(props)
    }

    async _onPressLosgin(){
        await this.props.login(true)
        if(this.props.isLogin){
            this.props.navigation.navigate("photo")
        }
    }

    render(){
        return(
            <View style={styles.view}>
                <Text style={{ alignSelf:"center"}}>loginscreen</Text>
                <TouchableOpacity style={{alignSelf:"center"}} onPress={()=>this._onPressLosgin()}>
                    <Text style={{fontSize:30}}>login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

styles = StyleSheet.create({
    view:{
        alignContent:"center",
        justifyContent:"center",
        flex:1
    }
})

function A (state){
    return{
        isLogin : state.isLogin
    }
}

function B (dispatch){
    return{
        login : (isLogin)=>{
            dispatch(ActionCreator.LoginAction(isLogin))
        }
    }
}

export default connect(A,B)(LoginScreen)
