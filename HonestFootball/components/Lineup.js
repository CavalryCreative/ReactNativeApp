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

const GoalsScored = (props) => {
  
  const goals = props.goals;

  return goals.map(function(goal, i){
    return(
     <Icon name='fingerprint' />
    );
  });

  // const content = goals.map((goal, index) =>
    
  //    <Icon name='fingerprint' />
  // );
  // return (   
  //    <Icon name='fingerprint' />
  //     //{content}
  // );
}

const YellowCard = (props) => {
  
  const hasCard = props.hasCard;

  if(hasCard === 'true')
  {
    return <Icon name='explore' />
  }
  else
  {
    return null;
  }
}

const RedCard = (props) => {
  
 const hasCard = props.hasCard;

  if(hasCard === 'true')
  {
    return <Icon name='eject' />
  }
  else
  {
    return null;
  }
}

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
    //add to feed
    const hasYellowCard = "true";
    const hasRedCard = "true";
    const goalsScored = parseInt('1');
    const subTime = item.SubTime;

    //let goalsScoredElement;
    let yellowCardElement;
    let redCardElement;
    let retElement;
    let retStr = '';

    // isSubstituted (True/False), HasYellowCard, HasRedCard, HasScored, SubOn
    
    retStr = playerNumber + ' ' + playerSurname;

//create array goals scored
let goals = [];

    for (var i = 0; i < goalsScored; i++) {
      goals.push(i);
    }

      if(isSubstituted === "false")
      {
       retElement = <Text>{retStr} <GoalsScored goals={goals} /> <YellowCard hasCard={hasYellowCard} /> <RedCard hasCard={hasRedCard} /></Text>;
      }
      else
      {
        retStr = retStr + ' (' + subTime + ')' ;
      
        retElement = <Text style={styles.substituted}>{retStr} <GoalsScored goals={goals} /> <YellowCard hasCard={hasYellowCard} /> <RedCard hasCard={hasRedCard} /></Text>;
      }   

      return retElement;    
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
