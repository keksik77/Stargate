import React from 'react'
import {Image,View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import {w} from '../../../constants'
import Icon from 'react-native-vector-icons/FontAwesome'

const ImageBigCard = ({data}) => {

    const {container,cover,sub,svg,svg_text} = styles
    const {image} = data
    try {
        return(
            <View style={container}>
                <View style={sub}>
                    <Image style={cover} source={{uri: image.original}} />
                </View>
            </View>
        )
    }catch(e){
        return(
        <View style={container}>
            <View style={sub}>
                <Icon name='eye-slash' color='gray' style={svg}/>
                <Text style={svg_text}>No image</Text>
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
       paddingVertical: 20,
    },

    sub: {
        flexDirection: 'row',
        display: 'flex',
        width: w/1.2,
        height: w*1.2,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333'
    },

    cover:{
        width: w/1.2,
        height: w*1.2,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#333',
    },
    svg:{
        fontSize: 100,
        alignSelf: 'center'
    },

    svg_text:{
        fontSize: 30,
        color: "gray",
        marginLeft: 10
    }
});

export {ImageBigCard}