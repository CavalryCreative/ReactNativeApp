import React, { PropTypes} from 'react';
import { StyleSheet, TextInput, FlatList, TouchableOpacity, Text, View, Dimensions, ListView  } from 'react-native';

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

    console.log(props);
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

    // if(item.Name === props.team)
    // {
    //     return ( 
    //       <View style={{flex: 1}}> 
    //         <View>
    //           <Text>{item.Name}</Text>
    //           <Text>Selected</Text>
    //         </View>          
    //       </View>
    //     );
    // }
    // else
    // {
         return ( 
          <View style={{flex: 1}}> 
            <View>              
              <TouchableOpacity>
                <Text>{item.Name}</Text>
              </TouchableOpacity>
            </View>          
          </View>
        );
    //}  
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
          <TextInput 
            value={this.props.team}
            onChangeText={this.props.onTeamUpdate} 
            />
        </View>
      );
  }
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