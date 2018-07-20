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
import routes from './routes'
import Comment from './components/comment'
import Lineup from './components/Lineup'
import TimerMixin from 'react-timer-mixin'
import TabBarContainer from './components/TabBarContainer'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
       <TabBarContainer />
        <Comment />
         
      </View>
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
