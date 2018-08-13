import React from 'react';
import { Text, View, ListView  } from 'react-native';

export default class Comment extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

     return (
        <View>
          <Text>{this.props.Minute}</Text>
          <Text>{this.props.HomeComment}</Text>
          <Text>{this.props.AwayComment}</Text>
          <Text>{this.props.Score}</Text>
        </View>
      );
  }
}
