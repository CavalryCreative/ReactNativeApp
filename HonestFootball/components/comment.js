import React from 'react';
import { Text, View, ListView  } from 'react-native';

export default class Comment extends React.Component {

  constructor(props){
    super(props);

    this.state ={ 
        HomeComment: '',
        AwayComment: '',
        Minute: '',
        Score: ''
    };
  }

loadData(){
  
  let response = this.props.dataSource;

    this.setState({
          
           HomeComment: response[1].LatestEvent.HomeComment,
           AwayComment: response[1].LatestEvent.AwayComment,
           Minute: response[1].LatestEvent.Minute,
           Score: response[1].LatestEvent.Score
          // HomePossession: Number(responseJson.Matches[1].MatchStats.HomeTeamPossessionTime),
          // AwayPossession: Number(responseJson.Matches[1].MatchStats.AwayTeamPossessionTime),
          // TotalPossession: HomePossession + AwayPossession,
          // HomeShots: Number(responseJson.Matches[1].MatchStats.HomeTeamTotalShots),
          // AwayShots: Number(responseJson.Matches[1].MatchStats.AwayTeamTotalShots),
          // TotalShots: HomeShots + AwayShots,
          // HomeShotsOnTarget: Number(responseJson.Matches[1].MatchStats.HomeTeamOnGoalShots),
          // AwayShotsOnTarget: Number(responseJson.Matches[1].MatchStats.AwayTeamOnGoalShots),
          // TotalShotsOnTarget: HomeShotsOnTarget + AwayShotsOnTarget,
          // HomeCorners: Number(responseJson.Matches[1].MatchStats.HomeTeamCorners),
          // AwayCorners: Number(responseJson.Matches[1].MatchStats.AwayTeamCorners),
          // TotalCorners: HomeCorners + AwayCorners,
          // HomeFouls: Number(responseJson.Matches[1].MatchStats.HomeTeamFouls),
          // AwayFouls: Number(responseJson.Matches[1].MatchStats.AwayTeamFouls),
          // TotalFouls: HomeFouls + AwayFouls
        }, function(){
          
        });
}

 componentDidMount() {
  this.loadData();
  }

  render(){

     return (
        <View>
          <Text>{this.state.Minute}</Text>
          <Text>{this.state.HomeComment}</Text>
          <Text>{this.state.AwayComment}</Text>
          <Text>{this.state.Score}</Text>
        </View>
      );
  }
}


