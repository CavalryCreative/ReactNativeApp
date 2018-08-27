import React from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import MainContainer from './containers/MainContainer';
import SettingsContainer from './containers/SettingsContainer' 
import { Icon } from 'react-native-elements'

const SettingsStack = createStackNavigator({

 	SettingsContainer: {
 		screen: SettingsContainer,
 		navigationOptions: ({navigation}) =>{
 			return{
 				title: 'Pick a team'
 			}	
 		}
 	}
 });

const MainStack = createStackNavigator({

 	MainContainer: {
 		screen: MainContainer,
 		navigationOptions: ({navigation}) => {
 			return{
 				title: 'Honest Football',
 				headerRight: (
 					<Icon
 						type='evilicon'
 						name='plus'
 						size={30}
 						onPress={() => navigation.navigate('SettingsContainer')}
 					/>
 				),
 				headerLeft: null
 			};
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
	initialRouteName: 'MainContainer'
});