import React from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View, Dimensions, ListView  } from 'react-native';

import { getTeamId } from '../storageManager'

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;
// const SCREEN_HEIGHT = width < height ? height : width;
const isSmallDevice = SCREEN_WIDTH <= 414;
const numColumns = 2;
//const numColumns = isSmallDevice ? 2 : 3;

export default class Fixtures extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      
    };
  }

componentDidMount() {
  this.loadFeed();
  }

loadFeed(){
  
   let teamId = this.props.teamId;

  return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/fixtures/' + teamId)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson.Fixtures,  
        }, function(){
         
        });
      })
      .catch((error) =>{
        console.error(error);
      });
}

 _renderItem = data => {
    const item = data.item;

    if (item.FullTimeScore === '[-]')
    {
      return ( 
          <View style={{flex: 1, flexDirection: 'row'}}>  
            <View style={styles.leftitem}>
              <Text>{item.HomeTeam} v {item.AwayTeam}</Text>
            </View>
            <View style={styles.rightitem}>
              <Text>{item.MatchDate}</Text>
            </View>
           </View>
      );
    }
    else
    {
      return ( 
          <View style={{flex: 1, flexDirection: 'row'}}>  
            <View style={styles.leftitem}>
              <Text>{item.HomeTeam} v {item.AwayTeam}</Text>
            </View>
            <View style={styles.rightitem}>
              <Text>{item.FullTimeScore}</Text>
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
           scrollEnabled={true}
            data={this.state.dataSource}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderItem}
          />
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
  // itemImage: {
  //   width: (SCREEN_WIDTH - PRODUCT_ITEM_MARGIN) / numColumns -
  //     PRODUCT_ITEM_MARGIN,
  //   height: 125,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // itemTitle: {
  //   flex: 1,
  //   ...Platform.select({
  //     ios: {
  //       fontWeight: '400',
  //     },
  //   }),
  //   margin: PRODUCT_ITEM_OFFSET * 2,
  // },
  // itemFooter: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingTop: PRODUCT_ITEM_OFFSET * 2,
  //   borderWidth: 0,
  //   borderTopWidth: StyleSheet.hairlineWidth,
  //   borderColor: 'rgba(0,0,0,0.15)',
  //   margin: PRODUCT_ITEM_OFFSET * 2,
  // },
});