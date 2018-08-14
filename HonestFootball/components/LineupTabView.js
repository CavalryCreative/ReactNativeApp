import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { Alert, TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Lineup  from './Lineup'
import LeagueTable  from './Table'
import Fixtures  from './Fixtures'

const LineupRoute = (props) => {
  //<View style={[styles.container, { backgroundColor: '#ff4081' }]} />
  const response = props.dataSource;

  if (response !== undefined)
  {
    return <Lineup dataSource={response} />
  }
  else
  {
    return <Text>Twat</Text>
  }
};

const TableRoute = () => (
  //<View style={[styles.container, { backgroundColor: '#673ab7' }]} />
  <LeagueTable />
);

const FixtureRoute = () => (
  <Fixtures />
  //<View style={[styles.container, { backgroundColor: '#373ab7' }]} />
);

export default class LineupsTabView extends React.Component {

   constructor(props){
    super(props);

     this.state = {
      index: 0,
      routes: [
        { key: 'lineup', title: 'lineup' },
        { key: 'table', title: 'table' },
        { key: 'fixtures', title: 'fixtures' },
      ],
      dataSource: ''
    };
  }

loadData(){
  
  let response = this.props.dataSource;
console.log('Load Data Balls ' + response[0].LatestEvent.HomeComment);
    this.setState({
          
          dataSource: response
        }, function(){         
        });
}

 componentDidMount() {
  this.loadData();
  }

_renderScene=({ this.state.routes }) => {
          switch (route.key) {
          case 'lineup':
            return <Lineup dataSource={this.state.dataSource} />;
          case 'table':
            return <LeagueTable />;
          case 'fixtures'
            return <Fixtures />
          default:
            return null;
        }})

  render() {
    let lineup = <Lineup dataSource={this.props.dataSource} />

    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          lineup: LineupRoute,
          table: TableRoute,
          fixtures: FixtureRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
        style={styles.container}
        tabStyle={styles.tab}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#fff',
    height: 96
  },
  tab:{
    backgroundColor: '#fff'
  }
});