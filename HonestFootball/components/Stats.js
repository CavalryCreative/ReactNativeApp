import React from 'react';
import { FlatList, ActivityIndicator, Text, View, ListView  } from 'react-native';

//var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Stats extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      HomePossession: 56,
          AwayPossession: 44,
          TotalPossession: HomePossession + AwayPossession,
          HomeShots: 12,
          AwayShots: 12,
          TotalShots: HomeShots + AwayShots,
          HomeShotsOnTarget: 2,
          AwayShotsOnTarget: 1,
          TotalShotsOnTarget: HomeShotsOnTarget + AwayShotsOnTarget,
          HomeCorners: 9,
          AwayCorners: 6,
          TotalCorners: HomeCorners + AwayCorners,
          HomeFouls: 16,
          AwayFouls: 18,
          TotalFouls: HomeFouls + AwayFouls,
    };
  }

loadFeed(){
  //http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9815
  return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9259')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.Matches,
          HomePossession: 56,
          AwayPossession: 44,
          TotalPossession: HomePossession + AwayPossession,
          HomeShots: 12,
          AwayShots: 12,
          TotalShots: HomeShots + AwayShots,
          HomeShotsOnTarget: 2,
          AwayShotsOnTarget: 1,
          TotalShotsOnTarget: HomeShotsOnTarget + AwayShotsOnTarget,
          HomeCorners: 9,
          AwayCorners: 6,
          TotalCorners: HomeCorners + AwayCorners,
          HomeFouls: 16,
          AwayFouls: 18,
          TotalFouls: HomeFouls + AwayFouls,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
}

 componentWillMount() {
  //this.loadFeed();
    //this.timer = setInterval(()=> this.loadFeed(), 5000)
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

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
