import React from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import * as permissions from "expo-permissions"
import * as ImagePicker from 'expo-image-picker';
import {connect} from 'react-redux'
import ActionCreator from '../actions'

import fetchPhoto from '../apis/FetchPhoto'

class PhotoScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            image:null
        }
    }

    componentDidMount(){
        const grant = permissions.getAsync(permissions.CAMERA_ROLL)
        if(grant != "granted"){
            permissions.askAsync(permissions.CAMERA_ROLL)
        }
    }

    async _getPhoto(){
        const image = await ImagePicker.launchImageLibraryAsync({quality:0.3})
        this.props.photo(image.uri)
        this.setState({image:image})
    }

    async _cancelPhoto(){
        await this.props.photo("../")
    }

    async _sendPhotoToServer(){
        const result = fetchPhoto(this.state.image)
    }

    async _logout(){
        await this.props.logout(false)
        this.props.navigation.navigate("login")
    }

    render(){
        return(
            <View stlye={styles.view}>
                <TouchableOpacity onPress={()=>this._getPhoto()}>
                    <Text style={styles.text}>Gallery</Text>
                </TouchableOpacity>
                <Image source={{uri:this.props.uri}} style={{width:200,height:200}}></Image>
                <TouchableOpacity onPress={()=>this._cancelPhoto()}>
                    <Text style={styles.text}>cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this._sendPhotoToServer()}>
                    <Text style={styles.text}>sendtoserver</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={()=>this._logout()}>
                    <Text style={styles.text}>logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

styles = StyleSheet.create({
    view:{
        flex:1,
        alignContent:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:30,
        alignSelf:"center"
    }
})

function mapStateToProps(state){
    return{
        uri:state.uri,
        isLogin:state.isLogin
    }
}

function mapDispatchToProps(dispatch){
    return{
        photo:(uri)=>{
            dispatch(ActionCreator.PhotoAction(uri))
        },
        logout:(isLogin)=>{
            dispatch(ActionCreator.LogoutAction(isLogin))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PhotoScreen)