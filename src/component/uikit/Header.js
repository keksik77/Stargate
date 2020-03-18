//import

import React from 'react'
import{View,Text,StyleSheet,ImageBackground,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {w} from '../../../constants'

const Header = ({title,detail, onPress, leftIcon,leftColor}) => {
    const {header,logo,LeftBottomStyle} = styles
    return (
     <ImageBackground source={require('../../../assets/img/scale_1200.png')} style={{width: '100%', height: 100}}>
        <View style={header}>
        <TouchableOpacity onPress={onPress}>
          <Icon name={leftIcon} style={[LeftBottomStyle,{paddingLeft: detail ? 5:15}]} color={leftColor} ></Icon>
         </TouchableOpacity>
          <Text numberOfLines={1} ellipsizeMode='tail' style={[logo,{paddingLeft: leftIcon ? 5:0,
             fontSize: leftIcon ? 27:30 ,}]}>{title}</Text>
        </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({

    logo:{
      color: 'white',
      fontFamily: "Acme-Regular",
      width: w-60,
    },
  
    header: {
      flexDirection: 'row',
      height: 100,
      paddingLeft: 2,
      paddingTop: 50,
      shadowOffset: {width: 100, height: 100},
      shadowColor: 'white',
      shadowOpacity: 0.4,
      elevation: 1,
      position:'relative',
    },

    LeftBottomStyle:{
      fontSize: 40,
    }
  });
  
//export

export {Header}