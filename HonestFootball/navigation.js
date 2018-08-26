import React from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import MainContainer from './containers/MainContainer';
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

 	MainContainer: {
 		screen: MainContainer,
 		navigationOptions: ({navigation}) => {
 			headerTitle: 'Honest Football'
 		}
 	}
 }
);

export default createSwitchNavigator(
{
	MainContainer: MainStack,
	SettingsContainer: SettingsStack
},
{
	initialRouteName: 'SettingsContainer'
});