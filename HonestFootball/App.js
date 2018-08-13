/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RSwiper from './components/MultiSwiper';
import routes from './routes'

type Props = {};
export default class App extends Component<Props> {

   constructor(props){
    super(props);
    this.state ={ 
      selectedLineupTab: 'lineup',
      lineupTabs:[
        {key: 'lineup'},
        {key: 'table'},
        {key: 'fixtures'},
      ],
      isLoading: true,
      HomeComment: '',
      AwayComment: '',
      Minute: '',
      Score: '',
      dataSource: ''
    };
  }

  loadFeed(){
  
  return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9259')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.Matches,
          // HomeComment: responseJson.Matches[1].LatestEvent.HomeComment,
          // AwayComment: responseJson.Matches[1].LatestEvent.AwayComment,
          // Minute: responseJson.Matches[1].LatestEvent.Minute,
          // Score: responseJson.Matches[1].LatestEvent.Score,
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

      })
      .catch((error) =>{
        error => this.setState({ error, isLoading: false })
      });
}

 componentDidMount() {
  
  this.loadFeed();
    //this.timer = setInterval(()=> this.loadFeed(), 5000);
  }
  
  render() {
     if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (   
         <RSwiper dataSource = {this.state.dataSource} />
    );
  }
}

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
