
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation'

import {routes} from '../routes'
import Main from './Main';
import Settings from './Settings'
import RSwiper from './MultiSwiper'

import { getTeamId } from '../storageManager'

type Props = {};
export default class App extends Component<Props> {
  
   constructor(props){
    super(props);
    this.state ={ 
      teamId: ''
    };
  }

componentDidMount() {

   getTeamId().
      then(data =>{
       
        if(data.team)
        {
           this.props.onRehydrateTeamName(data.team);

            this.setState({
              teamId: data.team,
            }, function(){
              
            });
        } 
      })
  }

  // _renderScene(route, navigator){
  //     switch(route.name){
  //       case 'Settings':
  //         return <Settings /> //navHandler={() => { navigator.push(routes.main) }}
  //       case 'Main':
  //         return <Main />
  //       default:
  //         return <Main />
  //     }
  // }

  render() {

    // const MainNavigator = createStackNavigator({

    //     Settings: {screen:'Settings'},
    //     Main: {screen:'Main'}
    // });

        if (this.state.teamId)
        {
          return <Main teamId = {this.state.teamId} />
        }
        else
        {
          return <Settings teamId = {this.state.teamId} />
        }
  }
}

 //<MainNavigator
          // initialRoute={routes.settings}
  //        renderScene={this.renderScene}
   //       style={styles.container}
   //       sceneStyle={styles.sceneContainer}
   //     />

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sceneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
})
