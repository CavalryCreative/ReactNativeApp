import React from 'react';
import { Alert, StyleSheet, Dimensions, FlatList, ActivityIndicator, Text, View, ListView  } from 'react-native';
import { Divider, Icon } from 'react-native-elements';

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
     <Icon key='{i}' name='fingerprint' />
    );
  });
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
  }

 _renderStartLineup = data => {

    const item = data.item;
    const isSub = String(item.IsSub);
    const isSubstituted = String(item.Substituted);
    const playerSurname = item.PlayerSurname;
    const playerNumber = item.Number;
    //add to feed
    const hasYellowCard = "false";
    const hasRedCard = "false";
    const goalsScored = parseInt('0');
    const subTime = item.SubTime;

    //let goalsScoredElement;
    let yellowCardElement;
    let redCardElement;
    let retElement;
    let retStr = '';

    // isSubstituted (True/False), HasYellowCard, HasRedCard, HasScored, SubOn
    if(isSub === "false")
    {
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
    }
     else
     {
      return null;
     }
  };

   _renderSubs = data => {

    const item = data.item;
    const isSub = String(item.IsSub);
    const isSubstituted = String(item.Substituted);
    const playerSurname = item.PlayerSurname;
    const playerNumber = item.Number;
    //add to feed
    const hasYellowCard = "false";
    const hasRedCard = "false";
    const goalsScored = parseInt('0');
    const subTime = item.SubTime;

    //let goalsScoredElement;
    let yellowCardElement;
    let redCardElement;
    let retElement;
    let retStr = '';

    // isSubstituted (True/False), HasYellowCard, HasRedCard, HasScored, SubOn
    if(isSub === "true")
    {
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
    }
     else
     {
      return null;
     }
  };

  render(){

  if (!Array.isArray(this.props.dataSource.Matches) || !this.props.dataSource.Matches.length)
  {
    return(
         <View style={{flex: 1}}>  
        <Text>No game today bellend</Text>
      </View>
      )    
  }
  else
  {
   return (
        <View style={{flex: 1, flexDirection: 'row'}}>  
            <View style={styles.leftitem}>
              <Text>{this.props.dataSource.Matches[0].HomeTeam}</Text>
               <FlatList
                scrollEnabled={false}
                data={this.props.dataSource.Matches[0].HomeLineUp}
                renderItem={this._renderStartLineup}
                keyExtractor={(item, index) => index.toString()}
              />
              <Divider style={{ backgroundColor: 'blue' }} />
              <FlatList
              scrollEnabled={false}
                data={this.props.dataSource.Matches[0].HomeLineUp}
                renderItem={this._renderSubs}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={styles.rightitem}>
            <Text>{this.props.dataSource.Matches[0].AwayTeam}</Text>
               <FlatList
               scrollEnabled={false}
                data={this.props.dataSource.Matches[0].AwayLineUp}
                renderItem={this._renderStartLineup}
                keyExtractor={(item, index) => index.toString()}
              />
              <Divider style={{ backgroundColor: 'blue' }} />
              <FlatList
              scrollEnabled={false}
                data={this.props.dataSource.Matches[0].AwayLineUp}
                renderItem={this._renderSubs}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
           </View>
      );
    } 
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
