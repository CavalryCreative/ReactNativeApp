import React, { PropTypes} from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Text, View, Dimensions, AsyncStorage  } from 'react-native';

import { setTeamId, getTeamId } from '../storageManager'

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

  componentDidMount() {
    this.loadFeed();
  }

loadFeed(){
  
  const somePromise = new Promise(r => fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/teams'));
  const cancelable = makeCancelable(somePromise); 

  return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/teams')//cancelable.promise
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson.Teams,
        }, function(){
          
        });
      })
     .catch(({isCanceled, ...error}) => console.log('isCanceled', isCanceled));

     // Cancel promise
      cancelable.cancel();
}

 _renderItem = data => {
    const item = data.item;
    const selectedTeamId = this.props.team;

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
                onPress={() => { goPressHandler(item.APIId) }} //goPressHandler(this.props.navHandler, item.Name) }
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
  //console.log('Settings: ', team.toString())
  setTeamId(team.toString());
  // .then(() => navHandler())
  //   .catch(ex => {
  //     console.log('Error storing customer name and account, proceeding anyway. Details:', ex)
  //     navHandler()
  //   })
}

const makeCancelable = (promise) => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => hasCanceled_ ? reject({isCanceled: true}) : resolve(val),
      error => hasCanceled_ ? reject({isCanceled: true}) : reject(error)
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    },
  };
};

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