import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

class HomeView extends React.Component {
  render() {
    return (


          <View style={styles.wrappa}>
            <View style={styles.head}>
              <View style={styles.timeBox}>

                <Text style={styles.titleIntro}>
                  Time
                  <Text style={styles.score}>
                    Score
                  </Text>
                </Text>

              </View>
              <View style={styles.scoreBox}>
              <Text style={styles.titleIntro}>
                Score
              </Text>
              </View>

            </View>
          <View style={styles.body}>
        <Text style={styles.block}>Onions</Text>
        </View>
          </View>

    );
  }
}


const styles = StyleSheet.create({

  slide2A: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  wrappa: {
    flex:1,
    alignSelf:'stretch',

  },
  head: {
    flex:1,
    backgroundColor:'#fff',
    flexDirection:'row'
  },
  body: {
    flex:5,
    backgroundColor:'#C51718',
    alignSelf:'stretch',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',



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
  },
  scoreBox:{
    flex:4,
    justifyContent: 'center',
    alignItems: 'center',

  },
  timeBox:{
    flex:2,
    borderRightWidth:2,
    borderRightColor:'#C51718',

    justifyContent: 'center',

    textAlign:'left',

  },
  titleIntro:{
      paddingLeft:20,
  },
  score:{

  },
  block:{
    fontSize:60,
    color:'#fff',
    paddingLeft:15,
    paddingBottom:15
  }

})




export default HomeView;
