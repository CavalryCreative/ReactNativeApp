import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';

import Swiper from 'react-native-swiper';
import TabBarContainer from './TabBarContainer';
import Comment from './comment'

export default class RSwiper extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
     
    };
  }

  render(){

     return (     
    
      <Swiper style={styles.wrapper} showsButtons={false} 
        loop={false}
        showsPagination={false}
        index={1}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Settings</Text>
        </View>
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
          index={1}>
          <View style={styles.slide1}>
            <TabBarContainer />
          </View>
          <View style={styles.slide2}>
            <Comment />
            <Text style={styles.text}>Comments - touch for stats</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Share</Text>
          </View>
        </Swiper>              
        <View style={styles.slide3}>
          <Text style={styles.text}>News</Text>
        </View>
      </Swiper>      
      );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
 slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  viewStyle:{
     flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
});
