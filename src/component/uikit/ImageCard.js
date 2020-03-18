import React from 'react'
import {Image,View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import {w} from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'

const ImageCard = ({data, onPress}) => {

    const {container,h1,cover,sub,svg} = styles
    const {image,name} = data
    try{
        const img = image.medium
        return(
            <TouchableOpacity onPress={onPress}>
            <View style={container}>
                <View style={sub}>
                    <Image style={cover} source={{uri: img}} />
                </View>
                <Text style={h1}>{name.toUpperCase()}</Text>
            </View>
            </TouchableOpacity>
        )
    }
    catch(e)
    {
        return(
            <TouchableOpacity onPress={onPress}>
            <View style={container}>
                <View style={sub}>
                    <Icon name='eye-slash' color='gray' style={svg}/>
                </View>
                <Text style={h1}>{name.toUpperCase()}</Text>
            </View>
            </TouchableOpacity>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
       width: w/2.4,
       paddingVertical: 10,
       marginRight: w/20,
    },

    sub: {
        display: 'flex',
        width: w/2.4,
        height: w*0.63,
        borderRadius: 10,
       // alignSelf: 'center',
       // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333'
    },

    h1:{
        paddingTop: 10,
        fontFamily: 'Oxanium-Medium',
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        width: w/2.4,
    },

    cover:{
        width: w/2.4,
        height: w*0.63,
        borderRadius: 10
    },

    svg:{
        fontSize: 60,
        alignSelf: 'center'
    }
});

export {ImageCard}