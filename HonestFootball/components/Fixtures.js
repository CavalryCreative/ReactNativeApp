import React from 'react';
import { StyleSheet, FlatList, ActivityIndicator, Text, View, Dimensions, ListView  } from 'react-native';

//var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

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
      isLoading: true
    };
  }

loadFeed(){
  
  return fetch('http://honest-apps.eu-west-1.elasticbeanstalk.com/api/fixtures/9815')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.Fixtures,
        }, function(){
          console.log(responseJson.Fixtures);
        });

      })
      .catch((error) =>{
        console.error(error);
      });
}

 _renderItem = data => {
    const item = data.item;
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
  };

// <View style={{flex: 1, flexDirection: 'row'}}>
//           <View style={{width: width / 2, height: height}}>
//            <Text>{item.HomeTeam} v {item.AwayTeam} {item.MatchDate}</Text>
//           </View>
//           <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} > 
//           </View>
//         </View>

  // {!item.image_url
  //         ? <View style={styles.itemImage}>
  //             <Text>No image</Text>
  //           </View>
  //         : <Image
  //             source={{ uri: item.image_url }}
  //             resizeMode={'cover'}
  //             style={styles.itemImage}
  //           />}
  //       <Text numberOfLines={3} style={styles.itemTitle}>
  //         {item.name_group_sp}
  //       </Text>
  //       <View style={styles.itemFooter}>
  //         <Text>Mínimo: {item.min_sale_amount_prod}</Text>
  //         <Text>UxB: {item.amount_prod}</Text>
  //         <Text
  //           style={
  //             !item.clearance ? styles.itemPrice : styles.itemPriceClearance
  //           }>
  //           {item.price_prod}
  //         </Text>
  //       </View>

   _getItemLayout = (data, index) => {
    // const productHeight = PRODUCT_ITEM_HEIGHT + PRODUCT_ITEM_MARGIN;
    // return {
    //   length: productHeight,
    //   offset: productHeight * index,
    //   index,
    };

 componentWillMount() {
  this.loadFeed();
    //this.timer = setInterval(()=> this.loadFeed(), 1000)
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

     return (
        <View style={styles.container}>
           <FlatList
            data={this.state.dataSource}
            keyExtractor={(item, index) => index}
            renderItem={this._renderItem}
            //getItemLayout={this._getItemLayout}
            //numColumns={numColumns}
            //renderItem={({item}) => <Text>{item.HomeTeam} v {item.AwayTeam} {item.MatchDate}</Text>}
            //keyExtractor={(item, index) => index}
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