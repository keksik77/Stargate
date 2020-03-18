//import { createBottomTabNavigator} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import One from './src/screen1'
import Two from './src/screen2'
import Three from './src/screen3'
import {BLUE} from './constants'

export default createDrawerNavigator(
  {  
    Screen1: {
      screen: One,
      navigationOptions:{
          drawerLabel: 'Stargate',
          drawerIcon: ({tintColor})=>(
            <Icon name="star" size={24} style={{color: tintColor}}/>
          )
      }
    },
    Screen2: {
      screen: Two,
      navigationOptions:{
          drawerLabel: 'Batman',
          drawerIcon: ({tintColor})=>(
            <Icon name="heart" size={24} style={{color: tintColor}}/>
          )
      }
    },
    Screen3: {
      screen: Three,
      navigationOptions:{
          drawerLabel: 'Spider Man',
          drawerIcon: ({tintColor})=>(
            <Icon name="bomb" size={24} style={{color: tintColor}}/>
          )
      }
    }
  },{
    drawerPosition: 'left',
    initialRouteName: 'Screen1',
     contentOptions: {
       activeTintColor: BLUE,
       itemsContainerStyle: {
         marginVertical: 65,
       },
     }
  }
  
)

/*export default createBottomTabNavigator(
  {
    Stargate: One,
    Batman: Two,
    Spiderman: Three
  },
  {
    navigationOptions:({navigation}) => ({
      tabBarIcon: ({focused,tintColor}) => {
        const {routeName} = navigation.state
        let iconName
        if(routeName === 'Stargate'){
          iconName = focused ? 'angellist': 'play'
        }else if(routeName === 'Batman'){
          iconName = focused ? 'angellist': 'play'
        }else if(routeName === 'Spiderman'){
        iconName = focused ? 'angellist': 'play'
        }
        return <Icon name={iconName} size={25} color={tintColor}/>
      }
    }),
    tabBarOptions:{
      style: { 
        backgroundColor: '#000' 
      }, 
      labelStyle:{
        fontFamily: 'Oxanium-Bold',
        fontSize: 12
      },
      activeTintColor: BLUE,
      inactiveTintColor: '#81BEF7'
    }
  }
)*/





