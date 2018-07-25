import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Lineup  from './Lineup'
import LeagueTable  from './Table'
import Fixtures  from './Fixtures'

const LineupRoute = () => (
  //<View style={[styles.container, { backgroundColor: '#ff4081' }]} />
  <Lineup />
);
const TableRoute = () => (
  //<View style={[styles.container, { backgroundColor: '#673ab7' }]} />
  <LeagueTable />
);
const FixtureRoute = () => (
  <Fixtures />
  //<View style={[styles.container, { backgroundColor: '#373ab7' }]} />
);

export default class LineupsTabView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'lineup', title: 'Lineup' },
      { key: 'table', title: 'Table' },
      { key: 'fixtures', title: 'Fixtures' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          lineup: LineupRoute,
          table: TableRoute,
          fixtures: FixtureRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    borderTopWidth: 1,
    borderTopColor: '#262626',
    height: 96
  },
});