import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { Alert, TabView, TabBar, SceneMap } from 'react-native-tab-view';

import { teamColors } from 'HonestFootball/components/colors.style.js';

import Lineup  from './Lineup'
import LeagueTable  from './Table'
import Fixtures  from './Fixtures'

const LineupRoute = (props) => {
  //<View style={[styles.container, { backgroundColor: '#ff4081' }]} />
  const response = props.dataSource;
  const teamId = props.teamId;

  if (response !== undefined)
  {
    return <Lineup dataSource={response} teamId={teamId} />
  }
  else
  {
    return <Text>Twat</Text>
  }
};

const TableRoute = () => (
  //<View style={[styles.container, { backgroundColor: 'red' }]} />
  <LeagueTable />
);

const FixtureRoute = () => (
  <Fixtures />
  //<View style={[styles.container, { backgroundColor: '#373ab7' }]} />
);

export default class LineupsTabView extends React.Component {

   constructor(props){
    super(props);

let response = this.props.dataSource;
let teamId = this.props.teamId;

     this.state = {
      index: 0,
      routes: [
        { key: 'lineup', title: 'lineup' },
        { key: 'table', title: 'table' },
        { key: 'fixtures', title: 'fixtures' },
      ],
      dataSource: response,
      teamId: teamId
    };
  }

renderScene = ({ route }) => {
   switch (route.key) {
     case 'lineup':
       return <Lineup dataSource={this.state.dataSource} teamId={this.state.teamId} />;
     case 'table':
       return <LeagueTable />;
      case 'fixtures':
       return <Fixtures teamId={this.state.teamId} />;
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
    indicatorStyle={{ backgroundColor: 'pink' }}

  />
}
       
         
      />

    );
  }
}

const styles = StyleSheet.create({
  

 
});