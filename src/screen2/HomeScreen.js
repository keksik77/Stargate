import React,{Component} from 'react';
import {View,StatusBar} from 'react-native';
import {ImageCard,Header,Layout} from './../component/uikit';
import { BATMAN_DETAILS 
} from '../routes';

const url = 'https://api.tvmaze.com/search/shows?q=batman'

export default class HomeScreen extends Component {

  state = {
    title: 'BATMAN',
    data: [],
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({data})
      StatusBar.setHidden(true);
    } catch (e) {
    }
  }
    render(){
      const{title,data} = this.state
      const {navigation} = this.props
      return(
        <View>
          <Header title={title}
          leftIcon="bars"
          leftColor="#fff"
          onPress={()=>navigation.openDrawer() }/>
          <Layout>
            {data.map(item => (
              <ImageCard data={item.show} key={item.show.id} 
             // onPress={() => console.log('onPress')}
             onPress={() => navigation.navigate(BATMAN_DETAILS,(item.show))}
             />                
              ))
            }
          </Layout>  
        </View>
      )
  }
};
