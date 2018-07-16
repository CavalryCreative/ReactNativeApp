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

// loadFeed(){
//   //http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9815
//  return fetch('https://facebook.github.io/react-native/movies.json')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: ds.cloneWithRows(responseJson.movies) 
//           }
//         }, function(){

//         });
//       })
//       .catch((error) =>{
//         console.error(error);
//       });
// }

 //this.timer = setInterval(()=> this.loadFeed(), 60000)
 //https://facebook.github.io/react-native/movies.json
 componentWillMount() {
    fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9815')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ dataSource: ds.cloneWithRows(responseJson.Matches) });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){

    // if(this.state.isLoading){
    //   return(
    //     <View style={{flex: 1, padding: 20}}>
    //       <ActivityIndicator/>
    //     </View>
    //   )
    // }

     return (
        <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData.HomeComment}</Text>}
          />
        </View>
      );
  }
}
