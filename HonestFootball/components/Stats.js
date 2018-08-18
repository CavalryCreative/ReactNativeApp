import React from 'react';
import { Text, View, ListView  } from 'react-native';

export default class Stats extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      HomePossession: 0,
          AwayPossession: 0,
          TotalPossession: 0,
          HomeShots: 0,
          AwayShots: 0,
          TotalShots: 0,
          HomeShotsOnTarget: 0,
          AwayShotsOnTarget: 0,
          TotalShotsOnTarget: 0,
          HomeCorners: 0,
          AwayCorners: 0,
          TotalCorners: 0,
          HomeFouls: 0,
          AwayFouls: 0,
          TotalFouls: 0,
    };
  }

loadData(){
  
  let response = this.props.dataSource;

  if (!Array.isArray(response) || !response.length)
  {
       this.setState({
          HomePossession: '',
          AwayPossession: '',
          TotalPossession: '',
          HomeShots: '',
          AwayShots: '',
          TotalShots: '',
          HomeShotsOnTarget: '',
          AwayShotsOnTarget: '',
          TotalShotsOnTarget: '',
          HomeCorners: '',
          AwayCorners: '',
          TotalCorners: '',
          HomeFouls: '',
          AwayFouls: '',
          TotalFouls: ''
        }, function(){
        });
  }
  else
  {
    if(response[0].LatestEvent !== null)
    {
        const totalPossession = parseInt(response[0].MatchStats.HomeTeamPossessionTime) + parseInt(response[0].MatchStats.AwayTeamPossessionTime);
        const totalShots = parseInt(response[0].MatchStats.HomeTeamTotalShots) + parseInt(response[0].MatchStats.AwayTeamTotalShots);
        const totalShotsOnTarget = parseInt(response[0].MatchStats.HomeTeamOnGoalShots) + parseInt(response[0].MatchStats.AwayTeamOnGoalShots);
        const totalCorners = parseInt(response[0].MatchStats.HomeTeamCorners) + parseInt(response[0].MatchStats.AwayTeamCorners);
        const totalFouls = parseInt(response[0].MatchStats.HomeTeamFouls) + parseInt(response[0].MatchStats.AwayTeamFouls);

    this.setState({
          HomePossession: parseInt(response[0].MatchStats.HomeTeamPossessionTime),
          AwayPossession: parseInt(response[0].MatchStats.AwayTeamPossessionTime),
          TotalPossession: totalPossession,
          HomeShots: parseInt(response[0].MatchStats.HomeTeamTotalShots),
          AwayShots: parseInt(response[0].MatchStats.AwayTeamTotalShots),
          TotalShots: totalShots,
          HomeShotsOnTarget: parseInt(response[0].MatchStats.HomeTeamOnGoalShots),
          AwayShotsOnTarget: parseInt(response[0].MatchStats.AwayTeamOnGoalShots),
          TotalShotsOnTarget: totalShotsOnTarget,
          HomeCorners: parseInt(response[0].MatchStats.HomeTeamCorners),
          AwayCorners: parseInt(response[0].MatchStats.AwayTeamCorners),
          TotalCorners: totalCorners,
          HomeFouls: parseInt(response[0].MatchStats.HomeTeamFouls),
          AwayFouls: parseInt(response[0].MatchStats.AwayTeamFouls),
          TotalFouls: totalFouls
        }, function(){
        });
    }
    else
    {
         this.setState({
          HomePossession: '',
          AwayPossession: '',
          TotalPossession: '',
          HomeShots: '',
          AwayShots: '',
          TotalShots: '',
          HomeShotsOnTarget: '',
          AwayShotsOnTarget: '',
          TotalShotsOnTarget: '',
          HomeCorners: '',
          AwayCorners: '',
          TotalCorners: '',
          HomeFouls: '',
          AwayFouls: '',
          TotalFouls: ''
        }, function(){
        });
    }
  }
}

 componentDidMount() {
  this.loadData();
  }

  render(){

     return (
        <View>
          <Text>{this.state.HomePossession}</Text>
          <Text>{this.state.AwayPossession}</Text>
          <Text>{this.state.TotalPossession}</Text>
          <Text>{this.state.HomeShots}</Text>
          <Text>{this.state.AwayShots}</Text>
          <Text>{this.state.TotalShots}</Text>
          <Text>{this.state.HomeShotsOnTarget}</Text>
          <Text>{this.state.AwayShotsOnTarget}</Text>
          <Text>{this.state.TotalShotsOnTarget}</Text>
          <Text>{this.state.HomeCorners}</Text>
          <Text>{this.state.AwayCorners}</Text>
          <Text>{this.state.TotalCorners}</Text>
          <Text>{this.state.HomeFouls}</Text>
          <Text>{this.state.AwayFouls}</Text>
          <Text>{this.state.TotalFouls}</Text>
        </View>
      );
  }
}
