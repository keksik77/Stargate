import React from 'react';
import {View, ScrollView,StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Layout = props =>{
    const {container,background} = styles
    return(
        <LinearGradient colors={['#000', '#08298A','#000']} style={background}>
        <ScrollView>
            <View style={container}>
                {props.children}
            </View>
        </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop: 30,
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexShrink: 2,
      justifyContent: "center",
      marginLeft: 19,
      marginBottom: 230,
    },
    background:{
        height: '100%'
    }
  })
  
  export {Layout} 