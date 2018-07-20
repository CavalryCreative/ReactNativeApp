import React, { Component } from 'react';
import { Text, View, StyleSheet  } from 'react-native';
import Tabs from 'react-native-tabs'

export default class TabBarContainer extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
    
    };
  }

  render(){

     return (
        <Tabs style='styles.tabContainer'>
	     	<Text>Comments</Text>
	     	<Text>Lineups</Text>
	     	<Text>Fixtures</Text>
	     </Tabs>
      );
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    //flex: 1,
    backgroundColor: '#343434',
    borderTopWidth: 1,
    borderTopColor: '#262626',
    height: 96
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
