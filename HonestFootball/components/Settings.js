import React, { PropTypes} from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View, Dimensions, AsyncStorage  } from 'react-native';

import { setTeamId, getTeamId } from '../storageManager'
import { connect } from 'react-redux';
import { fetchTeams } from '../actions';

//import AppNavigator from '../navigation'
import { createStackNavigator } from 'react-navigation';

import _ from 'lodash';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;
// const SCREEN_HEIGHT = width < height ? height : width;
const isSmallDevice = SCREEN_WIDTH <= 414;
const numColumns = 2;
//const numColumns = isSmallDevice ? 2 : 3;

type Props = {};
export default class Settings extends React.Component<Props> {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    //console.log('Settings componentDidMount:', this.props);
    this.props.onTeamFetch();
  }

 _renderItem = data => {
    const item = data.item;
    const { error, loading } = this.props;
    //const selectedTeamId = this.props.team;

    if (error) {
      return(
          <View style={{flex: 1}}> 
            <View>
              <Text>Error! {error.message}</Text>
            </View>          
          </View>
        )      
    }

//console.log('Settings _renderItem: ', item.APIId, this.props.team)
    if(item.APIId.toString() === this.props.team.toString())
    {
        return ( 
          <View style={{flex: 1}}> 
            <View>
              <Text>{item.Name} Selected</Text>
            </View>          
          </View>
        );
    }
    else
    {
         return ( 
          <View style={{flex: 1}}> 
            <View>              
              <TouchableOpacity
                onPress={() => { goPressHandler(item.APIId, this.props) }} //goPressHandler(this.props.navHandler, item.Name) }
                >
                <Text>{item.Name}</Text>
              </TouchableOpacity>
            </View>          
          </View>
        );
    }  
  };

  render(){

     return (
        <View style={styles.container}>
           <FlatList
            scrollEnabled={false}
            data={this.props.teams}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderItem}
          />       
        </View>
      );
  }
}

function goPressHandler(team, props){//navHandler

  setTeamId(team.toString());

let teamId;

  getTeamId().
      then(data =>{
       
        if(data.team)
        {
           props.onRehydrateTeamName(data.team);

           //teamId = data.team;
        } 
      })

console.log('Settings goPressHandler:', team.toString())

   setTimeout(() => props.navigation.navigate('MainContainer',
    {
      teamId: team.toString(),
    }
    )
   );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
  },
});