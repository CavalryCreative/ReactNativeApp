/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RSwiper from './MultiSwiper'
import AppNavigator from '../navigation'
import { getTeamId } from '../storageManager'

type Props = {};
export default class Main extends Component<Props> {

componentDidMount() {

  setTimeout(() => this.loadFeed());
  this.timer = setInterval(()=> this.loadFeed(''), 10000);
  }

   constructor(props){
    super(props);
    this.state ={ 
      selectedLineupTab: 'lineup',
      lineupTabs:[
        {key: 'lineup'},
        {key: 'table'},
        {key: 'fixtures'},
      ],
      isLoading: true,
      dataSource: '',
      teamId: ''
    };
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  loadFeed(){

  let teamId = this.props.team;
  console.log('Main loadFeed: ', teamId)

  return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/' + teamId)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.Matches,
          teamId: this.props.team,
        }, function(){
          
        });

      })
      .catch((error) =>{
         this.setState({
          isLoading: false,
          dataSource: ''
        }, function(){
          
        });
      });
}
  
  render() {
     if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }  

    return (   
         <RSwiper dataSource = {this.state.dataSource} teamId = {this.state.teamId} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
