import React, { PropTypes} from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View, Dimensions, AsyncStorage  } from 'react-native';

import { setTeamId } from '../storageManager'
import { connect } from 'react-redux';
import { fetchTeams } from '../actions';

//import AppNavigator from '../navigation'
import { createStackNavigator } from 'react-navigation';

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

  componentWillReceiveProps(nextProps){
    console.log('Settings componentWillReceiveProps:', nextProps);
  }

  componentDidMount() {
    this.props.onTeamFetch();
  }

 _renderItem = data => {
    const item = data.item;
    const { error, loading } = this.props;
    const selectedTeamId = this.props.team;

    if (error) {
      return(
          <View style={{flex: 1}}> 
            <View>
              <Text>Error! {error.message}</Text>
            </View>          
          </View>
        )      
    }

    if(item.APIId.toString() === selectedTeamId.toString())
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
                onPress={() => { goPressHandler(item.APIId, props.navHandler) }} //goPressHandler(this.props.navHandler, item.Name) }
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

function goPressHandler(team, navHandler){//navHandler
  console.log('Settings: ', navHandler)
  setTeamId(team.toString());

  //nav.navigate('App');
  // .then(() => navHandler())
  //   .catch(ex => {
  //     console.log('Error storing customer name and account, proceeding anyway. Details:', ex)
  //     navHandler()
  //   })
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
  },
});