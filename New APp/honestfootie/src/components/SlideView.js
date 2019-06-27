import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

import Swiper from 'react-native-swiper'
import HomeView from './HomeView'

class SlideView extends React.Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} index={1}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
            <Swiper
            horizontal={false}
            loop={false}
            showsPagination={false}
            index={1}>
            <View style={styles.slide2A}>
                <Text style={styles.text}>onionsxx</Text>
            </View>
            <View style={styles.slide2B}>
                <HomeView />
            </View>
            <View style={styles.slide2C}>
                <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  slide2A: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  slide2B: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  slide2C: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})


export default SlideView;
