import React from 'react';
import { FlatList, ActivityIndicator, Text, View, ListView  } from 'react-native';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Comment extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      dataSource: ds
    };
  }

loadFeed(){
  //http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9815
 return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9815')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.Matches) 
        });
      })
      .catch((error) => {
        console.error(error);
      });
}

 //this.timer = setInterval(()=> this.loadFeed(), 60000)
 //https://facebook.github.io/react-native/movies.json
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

          <FlatList
            data={this.state.dataSource}
            renderItem={(rowData) => <Text>{rowData.LatestEvent.HomeComment}</Text>}
          />
        </View>
      );
  }
}
