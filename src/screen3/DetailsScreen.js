import React, {PureComponent } from 'react';
import { Text,View,ScrollView,StyleSheet} from 'react-native'
import {Header,ImageBigCard} from '../component/uikit'
import Icon from 'react-native-vector-icons/FontAwesome'

class DetailsScreen extends PureComponent{
    render()
    {
        console.log('this.props',this.props);
        const{image,name,summary} = this.props.navigation.state.params
        const {navigation} = this.props
        const data = {image,name}
        const { container,h1,h2,sub} = styles
        return(
            <View style={container}>
                <Header title={name} 
                onPress={() =>navigation.goBack()}
                leftIcon='chevron-left'
                leftColor='#fff'/>
            <ScrollView>
                <ImageBigCard data={data}/>
                <View style={sub}>
                <Text style={h1}>{name.toUpperCase()} </Text>
                <Text style={h2}>{summary ? summary.replace(/<[^>]+>/g,''): ('Didn`t find summary =(')}</Text>
                </View>    
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        height: '100%',
        backgroundColor: '#0B0B61'
    },
    sub:{
        flex: 1,
        alignItems: 'center',
        marginBottom: 150,
    },
    h1:{
        fontFamily: 'AbrilFatface-Regular',
        fontSize: 30,
        padding: 15,
        textAlign: 'center',
        color: 'white',
    },

    h2:{
        fontFamily: 'Oxanium-Light',
        fontSize: 18,
        padding: 15,
        textAlign: 'center',
        paddingHorizontal: 10,
        color: 'gray',
    },

})

export default DetailsScreen
