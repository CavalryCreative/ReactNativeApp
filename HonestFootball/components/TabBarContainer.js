import React, { Component } from 'react';
import { Text, View, StyleSheet  } from 'react-native';
import Tabs from 'react-native-tabs'
import TabBarItem from './TabBarItem'

export default class TabBarContainer extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
    
    };
  }

  render(){

     return (
        <Tabs style={styles.tabContainer}>
         <TabBarItem name="lineup" label="Lineups" icon="" />
         <TabBarItem name="table" label="Table" icon="" />
         <TabBarItem name="fixtures" label="Fixtures" icon="" />
 	     	
	     </Tabs>
       //<TabBarItem name="lineup" label="Lineups" />
         // <TabBarItem name="table" label="Table" />
          //<TabBarItem name="fixtures" label="Fixtures" />
      );
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
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
