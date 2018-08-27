import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { Alert, TabView, TabBar, SceneMap } from 'react-native-tab-view';

import { teamColors } from 'HonestFootball/components/colors.style.js';

import Lineup  from './Lineup'
import LeagueTable  from './Table'
import Fixtures  from './Fixtures'

export default class LineupsTabView extends React.Component {

   constructor(props){
    super(props);

     this.state = {
      index: 0,
      routes: [
        { key: 'lineup', title: 'lineup' },
        { key: 'table', title: 'table' },
        { key: 'fixtures', title: 'fixtures' },
      ]
    };
  }

renderScene = ({ route }) => {
   switch (route.key) {
     case 'lineup':
       return <Lineup dataSource={this.props.dataSource} />;
     case 'table':
       return <LeagueTable />;
      case 'fixtures':
       return <Fixtures teamId={this.props.teamId} />;
     default:
      return null;
  }
  };

  render() {
    
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
        style={{backgroundColor:'red'}}
       renderTabBar={props =>
              <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: 'pink' }}/>
            }
      />
    );
  }
}

const styles = StyleSheet.create({
  

 
});