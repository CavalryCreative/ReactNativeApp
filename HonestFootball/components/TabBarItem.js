import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const TabBarItem = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text> 
    </View>
    //<Icon name={props.icon} style={styles.icon} />   
    )
  }
    
TabBarItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon:PropTypes.string,
  selected: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
  },
  icon: {
    color: '#ffffff',
    fontSize: 32,
    paddingVertical: 4,
  },
  label: {
    color: '#ffffff',
    paddingTop: 5,
  },
  selectedLabel:{
    color: '#cc9766'
  }
});

export default TabBarItem;