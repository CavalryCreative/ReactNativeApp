import React from 'react';
import { Text, View, ListView, Dimensions, StyleSheet, Platform  } from 'react-native';

const { width, height } = Dimensions.get('window');

let homeBackgroundColor;
let homeTextColor;
let awayBackgroundColor;
let awayTextColor;
let selectedTeamBackgroundColor;
let selectedTeamTextColor;

export default class Stats extends React.Component {

  constructor(props){
    super(props);

selectedTeamBackgroundColor = this.props.dataSource.Teams[0].PrimaryColour;
selectedTeamTextColor = this.props.dataSource.Teams[0].SecondaryColour;

if(this.props.dataSource.Matches[0].LatestEvent !== null)
{
  if(this.props.teamId === this.props.dataSource.Matches[0].LatestEvent.HomeTeamAPIId)
  {
    //Have to switch colours so as to contrast
    homeBackgroundColor = this.props.dataSource.Matches[0].HomeTeamSecondaryColour;
    homeTextColor = this.props.dataSource.Matches[0].HomeTeamPrimaryColour;
    awayBackgroundColor = this.props.dataSource.Matches[0].AwayTeamPrimaryColour;
    awayTextColor = this.props.dataSource.Matches[0].AwayTeamSecondaryColour;
  }
  else
  {
    homeBackgroundColor = this.props.dataSource.Matches[0].HomeTeamPrimaryColour;
    homeTextColor = this.props.dataSource.Matches[0].HomeTeamSecondaryColour;
    awayBackgroundColor = this.props.dataSource.Matches[0].AwayTeamSecondaryColour;;
    awayTextColor = this.props.dataSource.Matches[0].AwayTeamPrimaryColour;
  }
}

     this.state = {
        HomeBackgroundColor: homeBackgroundColor,
        HomeTextColor: homeTextColor,
        AwayBackgroundColor: awayBackgroundColor,
        AwayTextColor: awayTextColor,
        SelectedTeamBackgroundColor: selectedTeamBackgroundColor,
        SelectedTeamTextColor: selectedTeamTextColor
    };
  }

   componentDidMount() {
         this.setState = {
            HomeBackgroundColor: homeBackgroundColor,
            HomeTextColor: homeTextColor,
            AwayBackgroundColor: awayBackgroundColor,
            AwayTextColor: awayTextColor,
            SelectedTeamBackgroundColor: selectedTeamBackgroundColor,
            SelectedTeamTextColor: selectedTeamTextColor
          }
  }

  render(){

    if (!Array.isArray(this.props.dataSource.Matches) || !this.props.dataSource.Matches.length)
    {
        return(
            <View>
              <Text>No game today</Text>
            </View>
        )
    }
    else
    {
        if(this.props.dataSource.Matches[0].LatestEvent !== null)
        {
          const totalPossession = parseInt(this.props.dataSource.Matches[0].MatchStats.HomeTeamPossessionTime) + parseInt(this.props.dataSource.Matches[0].MatchStats.AwayTeamPossessionTime);
          const totalShots = parseInt(this.props.dataSource.Matches[0].MatchStats.HomeTeamTotalShots) + parseInt(this.props.dataSource.Matches[0].MatchStats.AwayTeamTotalShots);
          const totalShotsOnTarget = parseInt(this.props.dataSource.Matches[0].MatchStats.HomeTeamOnGoalShots) + parseInt(this.props.dataSource.Matches[0].MatchStats.AwayTeamOnGoalShots);
          const totalCorners = parseInt(this.props.dataSource.Matches[0].MatchStats.HomeTeamCorners) + parseInt(this.props.dataSource.Matches[0].MatchStats.AwayTeamCorners);
          const totalFouls = parseInt(this.props.dataSource.Matches[0].MatchStats.HomeTeamFouls) + parseInt(this.props.dataSource.Matches[0].MatchStats.AwayTeamFouls);

          const homePossWidth = (parseInt(this.props.dataSource.Matches[0].MatchStats.HomeTeamPossessionTime) / totalPossession) * width;
          const awayPossWidth = (parseInt(this.props.dataSource.Matches[0].MatchStats.AwayTeamPossessionTime) / totalPossession) * width;
          const homeShotsWidth = (parseInt(this.props.dataSource.Matches[0].MatchStats.HomeTeamTotalShots) / totalShots) * width;
          const awayShotsWidth = (parseInt(this.props.dataSource.Matches[0].MatchStats.AwayTeamTotalShots) / totalShots) * width;
          const homeShotsTotalWidth = (parseInt(this.props.dataSource.Matches[0].MatchStats.HomeTeamOnGoalShots) / totalShotsOnTarget) * width;
          const awayShotsTotalWidth = (parseInt(this.props.dataSource.Matches[0].MatchStats.AwayTeamOnGoalShots) / totalShotsOnTarget) * width;
          const homeCornersWidth = (parseInt(this.props.dataSource.Matches[0].MatchStats.HomeTeamCorners) / totalCorners) * width;
          const awayCornersWidth = (parseInt(this.props.dataSource.Matches[0].MatchStats.AwayTeamCorners) / totalCorners) * width;
          const homeFoulsWidth = (parseInt(this.props.dataSource.Matches[0].MatchStats.HomeTeamFouls) / totalFouls) * width;
          const awayFoulsWidth = (parseInt(this.props.dataSource.Matches[0].MatchStats.AwayTeamFouls) / totalFouls) * width;

             return (
              <View style={{marginTop: Platform.OS === 'ios' ? 64 : 56, backgroundColor: this.state.SelectedTeamBackgroundColor}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: width / 2, height: 20}}>
                      <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: "center", color: this.state.HomeTextColor}}>{this.props.dataSource.Matches[0].HomeTeam}</Text>
                    </View>
                    <View style={{ width: width / 2, height: 20}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: "center", color: this.state.HomeTextColor}}>{this.props.dataSource.Matches[0].AwayTeam}</Text>
                    </View>
                </View>
            
                <Text style={{color: this.state.HomeTextColor}}>Possession</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: homePossWidth, height: 50, backgroundColor: this.state.HomeBackgroundColor}}>
                      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: "center", color: this.state.HomeTextColor}}>{this.props.dataSource.Matches[0].MatchStats.HomeTeamPossessionTime.toString()}%</Text>
                  </View>
                  <View style={{ width: awayPossWidth, height: 50, backgroundColor: this.state.AwayBackgroundColor}}>
                      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: "center", color: this.state.AwayTextColor}}>{this.props.dataSource.Matches[0].MatchStats.AwayTeamPossessionTime.toString()}%</Text>
                  </View>
                </View>

                  <Text style={{color: this.state.HomeTextColor}}>Shots</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: homeShotsWidth, height: 50, backgroundColor: this.state.HomeBackgroundColor}}>
                       <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: "center",color: this.state.HomeTextColor}}>{this.props.dataSource.Matches[0].MatchStats.HomeTeamTotalShots}</Text>
                  </View>
                  <View style={{width: awayShotsWidth, height: 50, backgroundColor: this.state.AwayBackgroundColor}}>
                      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: "center",color: this.state.AwayTextColor}}>{this.props.dataSource.Matches[0].MatchStats.AwayTeamTotalShots}</Text>
                  </View>
                </View>

                  <Text style={{color: this.state.HomeTextColor}}>Shots on target</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: homeShotsTotalWidth, height: 50, backgroundColor: this.state.HomeBackgroundColor}}>
                      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: "center",color: this.state.HomeTextColor}}>{this.props.dataSource.Matches[0].MatchStats.HomeTeamOnGoalShots.toString()}</Text>
                  </View>
                  <View style={{width: awayShotsTotalWidth, height: 50, backgroundColor: this.state.AwayBackgroundColor}}>
                      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: "center",color: this.state.AwayTextColor}}>{this.props.dataSource.Matches[0].MatchStats.AwayTeamOnGoalShots.toString()}</Text>
                  </View>
                </View>

                  <Text style={{color: this.state.HomeTextColor}}>Corners</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: homeCornersWidth, height: 50, backgroundColor: this.state.HomeBackgroundColor}}>
                      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: "center",color: this.state.HomeTextColor}}>{this.props.dataSource.Matches[0].MatchStats.HomeTeamCorners.toString()}</Text>
                  </View>
                  <View style={{width: awayCornersWidth, height: 50, backgroundColor: this.state.AwayBackgroundColor}}>
                      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: "center",color: this.state.AwayTextColor}}>{this.props.dataSource.Matches[0].MatchStats.AwayTeamCorners.toString()}</Text>
                  </View>
                </View>

                 <Text style={{color: this.state.HomeTextColor}}>Fouls</Text>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: homeFoulsWidth, height: 50, backgroundColor: this.state.HomeBackgroundColor}}>
                      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: "center",color: this.state.HomeTextColor}}>{this.props.dataSource.Matches[0].MatchStats.HomeTeamFouls.toString()}</Text>
                  </View>
                  <View style={{width: awayFoulsWidth, height: 50, backgroundColor: this.state.AwayBackgroundColor}}>
                      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: "center",color: this.state.AwayTextColor}}>{this.props.dataSource.Matches[0].MatchStats.AwayTeamFouls.toString()}</Text>
                  </View>
                </View>
              </View>
            );
        }
        else
        {
           return(
                  <View>
                    <Text>Something cocked up</Text>
                  </View>
              )
        }
    }
  }
}

const styles = StyleSheet.create({
  lrgComment: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlignVertical: "bottom",
    textAlign: "center",
  // flexDirection: "row",
  //   fontFamily: 'Helvetica-Bold',
  //   padding: 15,
  //   textAlignVertical: "bottom",
  //   position: 'absolute',
  //   bottom:0,
  },
});
