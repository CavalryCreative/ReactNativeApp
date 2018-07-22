/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RSwiper from './components/MultiSwiper';

import routes from './routes'
import Lineup from './components/Lineup'

type Props = {};
export default class App extends Component<Props> {

   constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      HomeComment: '',
      AwayComment: '',
      Minute: '',
      Score: ''
    };
  }

  loadFeed(){
  //http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9815
  return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9815')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.Matches,
          HomeComment: responseJson.Matches[0].LatestEvent.HomeComment,
          AwayComment: responseJson.Matches[0].LatestEvent.AwayComment,
          Minute: responseJson.Matches[0].LatestEvent.Minute,
          Score: responseJson.Matches[0].LatestEvent.Score
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
}

 componentWillMount() {
    this.timer = setInterval(()=> this.loadFeed(), 5000)
  }
  
  render() {
    return (       
         
        <RSwiper />
       
          //<Comment />
      //<Lineup />
      //<FetchExample />
    );
  }
}

// function getFeed() {
//   return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9815')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       return responseJson.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

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
