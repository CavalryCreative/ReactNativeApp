import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';

import Swiper from 'react-native-swiper';
import TabBarContainer from './TabBarContainer';
import Comment from './comment'
import PropTypes from 'prop-types';
import LineupsTabView  from './LineupTabView'
import Settings from './Settings'

import Stats from './Stats'

export default class RSwiper extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

     return (     
    
      <Swiper style={styles.wrapper} showsButtons={false} 
        loop={false}
        showsPagination={false}
        index={1}>
        
        <View style={styles.slide2}>
          <Settings />
        </View>

          <Swiper
            horizontal={false}
            loop={false}
            showsPagination={false}
            index={1}>
            <View style={styles.slide1}>
               <LineupsTabView dataSource = {this.props.dataSource} /> 
            </View>

            <View style={styles.slide2}>
               <Comment dataSource = {this.props.dataSource} />
            </View>

            <View style={styles.slide3}>
              <Stats dataSource = {this.props.dataSource} />
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
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  viewStyle:{
     flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
});
