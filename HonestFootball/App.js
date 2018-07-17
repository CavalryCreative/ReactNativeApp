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
import Comment from './comment'
import FetchExample from './FetchExample'
import Lineup from './Lineup'
import TimerMixin from 'react-timer-mixin'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Comment />
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
