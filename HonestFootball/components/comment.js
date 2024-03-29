import React from 'react';
import { Text, View, StyleSheet, ListView  } from 'react-native';
import { globalStyle } from 'HonestFootball/components/app.style.js';
import { teamColors } from 'HonestFootball/components/colors.style.js';

import _ from 'lodash';

export default class Comment extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        BackgroundColor: this.props.dataSource.Teams[0].PrimaryColour,
        TextColor: this.props.dataSource.Teams[0].SecondaryColour
    };
  }

  componentDidMount() {
         this.setState = {
            BackgroundColor: this.props.dataSource.Teams[0].PrimaryColour,
            TextColor: this.props.dataSource.Teams[0].SecondaryColour
          }
  }

  render(){
//console.log('Comment render: ', this.props.teamId, this.props.dataSource);

      if (!Array.isArray(this.props.dataSource.Matches) || !this.props.dataSource.Matches.length)
      {
        let rnd = _.random(5);
        let message;

        switch(rnd) { 
            case 0: { 
              message = 'No game today dickhead'; 
              break; 
           } 
           case 1: { 
              message = 'Still no game today'; 
              break; 
           } 
           case 2: { 
              message = 'No game today'; 
              break; 
           } 
           case 3: { 
              message = 'No game today tool'; 
              break; 
           } 
           case 4: { 
              message = 'No game today dogbreath'; 
              break; 
           } 
           case 5: { 
              message = 'No game today jim'; 
              break; 
           } 
           default: { 
              message = 'No game today dickhead'; 
              break; 
           } 
        }

        return(
            <View style={styles.pageComments}>
                         <View style={{flex: 10, backgroundColor: this.state.BackgroundColor}} >
                            <Text style={styles.lrgComment}>{message}</Text>                    
                        </View>
                      </View>
        )
      }
      else
      {
          if(this.props.dataSource.Matches[0].LatestEvent !== null)
          {
              let homeTeamId = this.props.dataSource === undefined ? 'undefined' : this.props.dataSource.Matches[0].LatestEvent.HomeTeamAPIId.toString();
              let selectedTeamId = this.props.teamId.toString();

              const scoreArr = _.split(this.props.dataSource.Matches[0].LatestEvent.Score, '-', 2);
              const homeScore = _.take(scoreArr) + ' - ' + this.props.dataSource.Matches[0].HomeTeam;
              const awayScore = _.takeRight(scoreArr) + ' - ' + this.props.dataSource.Matches[0].AwayTeam;

              if(homeTeamId === selectedTeamId)
              {
                 return (
                 
                     <View style={styles.pageComments}>

                       <View style={styles.pageCommentsHead} >
                            <View style={styles.timBox} >
                                    <Text style={styles.label}>Time:</Text>
                                    <Text style={styles.time}>{this.props.dataSource.Matches[0].LatestEvent.Minute}</Text>
                            </View>
                            <View style={styles.scoreBox} >
                             <Text style={styles.label}>Scoreline:</Text>
                                    <Text style={styles.scoreTeam}>{homeScore}</Text>
                                   <Text style={styles.scoreTeam}>{awayScore}</Text>
                            </View>

                        </View>
                         <View style={{flex: 10, backgroundColor: this.state.BackgroundColor}} >
                            <Text style={styles.lrgComment}>{this.props.dataSource.Matches[0].LatestEvent.HomeComment}</Text>
                      
                        </View>
                      </View>
                    );
              }
              else
              {
                  return (

                      <View style={styles.pageComments}>

                       <View style={styles.pageCommentsHead} >
                            <View style={styles.timBox} >
                                    <Text style={styles.label}>Time:</Text>
                                    <Text style={styles.time}>{this.props.dataSource.Matches[0].LatestEvent.Minute}</Text>
                            </View>
                            <View style={styles.scoreBox} >
                             <Text style={styles.label}>Scoreline:</Text>
                                    <Text style={styles.scoreTeam}>{homeScore}</Text>
                                   <Text style={styles.scoreTeam}>{awayScore}</Text>                                   
                            </View>

                        </View>
                         <View style={{flex: 10, backgroundColor: this.state.BackgroundColor}} >
                            <Text style={styles.lrgComment}>{this.props.dataSource.Matches[0].LatestEvent.AwayComment}</Text>
                      
                        </View>
                      </View>
                    );
              }
          }
          else
          {
             return(
            <View style={styles.pageComments}>
                <View style={{flex: 10, backgroundColor: this.state.BackgroundColor}} >
                    <Text style={styles.lrgComment}>Check back later</Text>                     
                </View>
            </View>
        )
          }
      }
  }
}

const styles = StyleSheet.create({
  lrgComment: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    textAlignVertical: "bottom",
    textAlign: "left",
  flexDirection: "row",
    fontFamily: 'Helvetica-Bold',
    padding: 15,
    textAlignVertical: "bottom",
    position: 'absolute',
    bottom:0,


  },
  pageComments:{
    flex:1,
    width:380,
  },
  pageCommentsHead:{
    flex: 2, 
    flexDirection: 'row',
    backgroundColor: 'white', 
    marginTop:0,
    marginBottom:0,
  },

  //    timeBlock: {
  //  border:'1px'
   


  // },
   time: {
    color: teamColors.primary,
    fontWeight: 'bold',
    fontSize: 55,
  
    textAlign: "left",
  
    fontFamily: 'Helvetica-Bold',
   paddingRight:15,
   paddingLeft:15,
   paddingTop:-5,
   paddingBottom:0,
  },
  scoreTeam:{

  },
   timBox: {
    flex:1,
    borderRightWidth:1,
    borderColor:teamColors.secondary,
    marginBottom:0,
    paddingBottom:0,
  },
 
 scoreBox:{

  flex:2,
   borderRightWidth:1,
    borderColor:teamColors.secondary,
    marginBottom:0,
    paddingBottom:0,
  },
  label: {
    color: teamColors.secondary,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop:0,
     padding: 15,
     paddingTop:0,
     marginBottom:0,
     paddingBottom:0,

  },
  scoreTeam:{
     color: teamColors.primary,
    fontWeight: 'bold',
    fontSize: 22,
    paddingLeft:15,
    paddingTop:6,
  },


  scoreLine: {
    color: teamColors.primary,
    fontWeight: 'bold',
    fontSize: 15,
    marginTop:0,
     padding: 15,
     paddingTop:0,
     marginBottom:0,
     paddingBottom:0,
  },
  red: {
    color: 'red',
  },
});