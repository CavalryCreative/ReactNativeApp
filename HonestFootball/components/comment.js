import React from 'react';
import { Text, View, StyleSheet, ListView  } from 'react-native';

export default class Comment extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    let homeTeamId = this.props.dataSource === undefined ? 'undefined' : this.props.dataSource[0].LatestEvent.HomeTeamAPIId.toString();
    let selectedTeamId = this.props.teamId.toString();

      if (!Array.isArray(this.props.dataSource) || !this.props.dataSource.length)
      {
        return(
            <View>
              <Text>No game today</Text>
            </View>
        )
      }
      else
      {
          if(this.props.dataSource[0].LatestEvent !== null)
          {
              if(homeTeamId === selectedTeamId)
              {
                 return (
                 
                      <View style={{flex: 1}}>
                       <View style={{flex: 1, backgroundColor: 'powderblue'}} >
                        <Text>{this.props.dataSource[0].LatestEvent.Minute}</Text>
                        </View>
                         <View style={{flex: 8, backgroundColor: 'skyblue'}} >
                        <Text>{this.props.dataSource[0].LatestEvent.HomeComment}</Text>
                        <Text>{this.props.dataSource[0].LatestEvent.Score}</Text>
                        </View>
                      </View>
                    );
              }
              else
              {
                  return (

                      <View style={{flex:1, width:380}}>

                       <View style={{flex: 2, backgroundColor: 'white', marginTop:30}} >
                          <View style={styles.timBox} >
                          <Text style={styles.timeSml}>Time:</Text>
                            <Text style={styles.time}>{this.props.dataSource[0].LatestEvent.Minute}</Text>
                          </View>
                          <View style={{width:150}} >
                              <Text style={{color: 'white'}}>{this.props.dataSource[0].LatestEvent.Score}</Text>
                                       </View>

 </View>
                         <View style={{flex: 10, backgroundColor: '#b4281e', color: 'white'}} >
                        <Text style={styles.lrgComment}>{this.props.dataSource[0].LatestEvent.AwayComment}</Text>
                      
                        </View>
                      </View>
                    );
              }
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
  //    timeBlock: {
  //  border:'1px'
   


  // },
   time: {
    color: '#b4281e',
    fontWeight: 'bold',
    fontSize: 50,
  
    textAlign: "left",
  
    fontFamily: 'Helvetica-Bold',
   paddingRight:15,
   paddingLeft:15,
   paddingTop:-5,
   paddingBottom:0,

  
   


  },
   timBox: {
    width:170,
    borderRightWidth:1,
    borderColor:'#b4281e',
    marginBottom:0,
   
    
   


  },
  timeSml: {
    color: '#212e51',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop:0,
     padding: 15,
     paddingTop:0,
     marginBottom:0,
     paddingBottom:0,
    
   


  },
  scoreLine: {
    color: '#212e51',
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