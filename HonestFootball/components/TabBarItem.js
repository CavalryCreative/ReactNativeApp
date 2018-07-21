import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export class TabBarItem extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name={props.icon} style={styles.icon} />
        <Text style={styles.label}>{props.label}</Text>
      </View>
    );
  }
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