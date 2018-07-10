import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class Comment extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9815')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.Matches,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.HomeComment}</Text>}
          keyExtractor={(item, index) => index}
        />
        <Text>Jim</Text>
      </View>
    );
  }
}
