import React from 'react';
import { Text, View, ListView  } from 'react-native';

export default class Stats extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

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
          const totalPossession = parseInt(this.props.dataSource[0].MatchStats.HomeTeamPossessionTime) + parseInt(this.props.dataSource[0].MatchStats.AwayTeamPossessionTime);
          const totalShots = parseInt(this.props.dataSource[0].MatchStats.HomeTeamTotalShots) + parseInt(this.props.dataSource[0].MatchStats.AwayTeamTotalShots);
          const totalShotsOnTarget = parseInt(this.props.dataSource[0].MatchStats.HomeTeamOnGoalShots) + parseInt(this.props.dataSource[0].MatchStats.AwayTeamOnGoalShots);
          const totalCorners = parseInt(this.props.dataSource[0].MatchStats.HomeTeamCorners) + parseInt(this.props.dataSource[0].MatchStats.AwayTeamCorners);
          const totalFouls = parseInt(this.props.dataSource[0].MatchStats.HomeTeamFouls) + parseInt(this.props.dataSource[0].MatchStats.AwayTeamFouls);

             return (
              <View>
                <Text>{this.props.dataSource[0].MatchStats.HomeTeamPossessionTime.toString()}</Text>
                <Text>{this.props.dataSource[0].MatchStats.AwayTeamPossessionTime}</Text>
                <Text>{totalPossession}</Text>
                <Text>{this.props.dataSource[0].MatchStats.HomeTeamTotalShots}</Text>
                <Text>{this.props.dataSource[0].MatchStats.AwayTeamTotalShots}</Text>
                <Text>{totalShots}</Text>
                <Text>{this.props.dataSource[0].MatchStats.HomeTeamOnGoalShots}</Text>
                <Text>{this.props.dataSource[0].MatchStats.AwayTeamOnGoalShots}</Text>
                <Text>{totalShotsOnTarget}</Text>
                <Text>{this.props.dataSource[0].MatchStats.HomeTeamCorners}</Text>
                <Text>{this.props.dataSource[0].MatchStats.AwayTeamCorners}</Text>
                <Text>{totalCorners}</Text>
                <Text>{this.props.dataSource[0].MatchStats.HomeTeamFouls}</Text>
                <Text>{this.props.dataSource[0].MatchStats.AwayTeamFouls}</Text>
                <Text>{totalFouls}</Text>
              </View>
            );
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
