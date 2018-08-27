
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import AppNavigator from '../navigation'
import Main from './Main';
import SettingsContainer from '../containers/SettingsContainer'
import RSwiper from './MultiSwiper'

import { getTeamId } from '../storageManager'

type Props = {};
export default class App extends Component<Props> {
  
   constructor(props){
    super(props);
    this.state ={ 
      teamId: ''
    };
  }

componentDidMount() {

console.log('App componentDidMount:', this.props)

   getTeamId().
      then(data =>{
       
        if(data.team)
        {
           this.props.onRehydrateTeamName(data.team);

            this.setState({
              teamId: data.team,
            }, function(){
              
            });
        } 
      })
  }

  render() {
console.log('App render:', this.props)
return(
  <AppNavigator />
  )
  
        // if (this.state.teamId)
        // {
        //   return(
        //        //<AppNavigator />
        //         <Main teamId = {this.state.teamId} />
        //     )
        // }
        // else
        // {
        //   return(
        //         //<AppNavigator />
        //         //<SettingsContainer teamId={this.state.teamId} navHandler={() => } />
        //         <SettingsContainer teamId={this.state.teamId} />
        //     ) 
        // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sceneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
})
