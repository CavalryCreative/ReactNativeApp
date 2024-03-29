import React from 'react';
import { FlatList, ActivityIndicator, Text, View, ListView  } from 'react-native';

//var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class LeagueTable extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true
    };
  }

loadFeed(){
  
  return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/leaguestandings')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.Standings,
        }, function(){
          
        });

      })
      .catch((error) =>{
        console.error(error);
      });
}

 componentDidMount() {
  this.loadFeed();
    //this.timer = setInterval(()=> this.loadFeed(), 1000)
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
           <FlatList
           scrollEnabled={false}
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.Name} {item.GamesPlayed} {item.GoalDifference} {item.Points}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
  }
}
