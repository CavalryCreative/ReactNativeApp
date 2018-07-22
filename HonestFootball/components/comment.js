import React from 'react';
import { FlatList, ActivityIndicator, Text, View, ListView  } from 'react-native';

//var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Comment extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      HomeComment: '',
      AwayComment: '',
      Minute: '',
      Score: ''
    };
  }

loadFeed(){
  //http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9815
  return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9815')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.Matches,
          HomeComment: responseJson.Matches[0].LatestEvent.HomeComment,
          AwayComment: responseJson.Matches[0].LatestEvent.AwayComment,
          Minute: responseJson.Matches[0].LatestEvent.Minute,
          Score: responseJson.Matches[0].LatestEvent.Score
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
}

 componentWillMount() {
    this.timer = setInterval(()=> this.loadFeed(), 5000)
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
