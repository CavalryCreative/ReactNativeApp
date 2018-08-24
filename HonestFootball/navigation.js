import React from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Main from './components/Main';
import SettingsContainer from './containers/SettingsContainer' 

const SettingsStack = createStackNavigator({

 	SettingsContainer: {
 		screen: SettingsContainer,
 		navigationOptions: ({navigation}) =>{
 			headerTitle: 'Pick a team'
 		}
 	}
 }
);

const MainStack = createStackNavigator({

 	Main: {
 		screen: Main,
 		navigationOptions: ({navigation}) => {
 			headerTitle: 'Honest Football'
 		}
 	}
 }
);

export default createSwitchNavigator(
{
	Main: MainStack,
	SettingsContainer: SettingsStack
},
{
	initialRouteName: 'Main'
});