import React from 'react';
import { Alert, StyleSheet, Dimensions, FlatList, ActivityIndicator, Text, View, ListView  } from 'react-native';
import { Icon } from 'react-native-elements';

//var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;
// const SCREEN_HEIGHT = width < height ? height : width;
const isSmallDevice = SCREEN_WIDTH <= 414;
const numColumns = 2;

export default class Lineup extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      homeTeam: '',
      awayTeam: '',
    };
  }

loadFeed(){
  
  return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/feed/9815')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          homeDataSource: responseJson.Matches[0].HomeLineUp,
          awayDataSource: responseJson.Matches[0].HomeLineUp,
          homeTeam: responseJson.Matches[0].HomeTeam,
          awayTeam: responseJson.Matches[0].AwayTeam,
        }, function(){
          //Alert.alert(responseJson.Matches[0].HomeTeam);
        });

      })
      .catch((error) =>{
        console.error(error);
      });
}

 _renderItem = data => {
    const item = data.item;
    const isSubstituted = String(item.Substituted);
    const playerSurname = item.PlayerSurname;
    const playerNumber = item.Number;
    const hasYellowCard = "false";
    const hasRedCard = "false";
    const goalsScored = "0";
    const subTime = item.SubTime;

    let retStr = '';

    // isSubstituted (True/False), HasYellowCard, HasRedCard, HasScored, SubOn
    
      if(isSubstituted === "false")
      {
        retStr = playerNumber + ' ' + playerSurname;

        return ( 
          <Text>{retStr}<Icon name='rowing' /></Text>
          )
        
      }
      else
      {
        retStr = playerNumber + ' ' + playerSurname + ' ' + subTime;

        return ( 
          <Text style={styles.substituted}>{retStr}</Text>
          )
      }       
  };

 componentWillMount() {
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
        <View style={{flex: 1, flexDirection: 'row'}}>  
            <View style={styles.leftitem}>
              <Text>{this.state.homeTeam}</Text>
               <FlatList
                data={this.state.homeDataSource}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index}
              />
            </View>
            <View style={styles.rightitem}>
            <Text>{this.state.awayTeam}</Text>
               <FlatList
                data={this.state.awayDataSource}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => index}
              />
            </View>
           </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
  },
   leftitem: {
    //justifyContent: 'center', 
    width: width / 1.5,
    //textAlign: 'left', 
  },
  rightitem: {
    //justifyContent: 'center', 
    width: width / 0.5,
    //textAlign: 'right', 
  },
  substituted:{

  },
});
