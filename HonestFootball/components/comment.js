import React from 'react';
import { Text, View, ListView  } from 'react-native';

export default class Comment extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    let homeTeamId = this.props.dataSource === undefined ? 'undefined' : this.props.dataSource[0].LatestEvent.HomeTeamAPIId.toString();
    let selectedTeamId = this.props.teamId.toString();

      if (!Array.isArray(this.props.dataSource) || !this.props.dataSource.length)
      {
        return(
            <View>
              <Text>No game today</Text>
            </View>
        )
      }
      else
      {
          if(this.props.dataSource[0].LatestEvent !== null)
          {
              if(homeTeamId === selectedTeamId)
              {
                 return (
                      <View>
                        <Text>{this.props.dataSource[0].LatestEvent.Minute}</Text>
                        <Text>{this.props.dataSource[0].LatestEvent.HomeComment}</Text>
                        <Text>{this.props.dataSource[0].LatestEvent.Score}</Text>
                      </View>
                    );
              }
              else
              {
                  return (
                      <View>
                        <Text>{this.props.dataSource[0].LatestEvent.Minute}</Text>
                        <Text>{this.props.dataSource[0].LatestEvent.AwayComment}</Text>
                        <Text>{this.props.dataSource[0].LatestEvent.Score}</Text>
                      </View>
                    );
              }
          }
          else
          {
              return(
                  <View>
                    <Text>Something cocked up</Text>
                  </View>
              )
          }
      }
  }
}