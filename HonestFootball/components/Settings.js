import React, { PropTypes} from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View, Dimensions, ListView, AsyncStorage  } from 'react-native';

import { setTeamName } from '../storageManager'

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;
// const SCREEN_HEIGHT = width < height ? height : width;
const isSmallDevice = SCREEN_WIDTH <= 414;
const numColumns = 2;
//const numColumns = isSmallDevice ? 2 : 3;

export default class Settings extends React.Component {

  constructor(props){
    super(props);

    this.state ={ 
      
    };
  }

loadFeed(){
  
  return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/teams')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson.Teams,
        }, function(){
          
        });
      })
      .catch((error) =>{
        console.error(error);
      });
}

 _renderItem = data => {
    const item = data.item;
    const teamName = item.Name;
    //console.log('Settings: ', this.props.team)

    if(item.Name === this.props.team)
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
                onPress={() => { goPressHandler(item.Name) }} //goPressHandler(this.props.navHandler, item.Name) }
                value={item.Name}
                >
                <Text>{item.Name}</Text>
              </TouchableOpacity>
            </View>          
          </View>
        );
    }  
  };

   _getItemLayout = (data, index) => {
    
    };

 componentDidMount() {
  this.loadFeed();
  }

  render(){

     return (
        <View style={styles.container}>
           <FlatList
            scrollEnabled={false}
            data={this.state.dataSource}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderItem}
          />       
        </View>

         // <TextInput
          //   onChangeText={this.props.onTeamUpdate} />
      );
  }
}

function goPressHandler(team){//navHandler
  setTeamName(team)
  // .then(() => navHandler())
  //   .catch(ex => {
  //     console.log('Error storing customer name and account, proceeding anyway. Details:', ex)
  //     navHandler()
  //   })
}

// Settings.propTypes = {
//   team: PropTypes.string,
//   onTeamUpdate: PropTypes.func.isRequired,
// }

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
  },
});