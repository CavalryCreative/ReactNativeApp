import React from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Main from './components/Main';
import SettingsContainer from './containers/SettingsContainer' 

const SettingsStack = createStackNavigator({

 	Settings: {
 		screen:'SettingsContainer',
 		navigationOptions: {
 			headerTitle: 'Pick a team'
 		}
 	}
 }
)

const AppStack = createStackNavigator({

 	Main: {
 		screen:'Main',
 		navigationOptions: {
 			headerTitle: 'Honest Football'
 		}
 	}
 }
)

export default createSwitchNavigator(
{
	App: AppStack,
	Settings: SettingsStack
},
{
	initialRouteName: 'App'
});