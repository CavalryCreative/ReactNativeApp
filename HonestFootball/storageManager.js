import React from 'react'
import { AsyncStorage } from 'react-native'

const storageTeamName = '@HonestFootball:teamName'

export function setTeamName(team){
	return AsyncStorage.multiSet([
			[storageTeamName, team]
		])
} 

export function getTeamName(){
	return new Promise((resolve, reject) => {
		AsyncStorage.multiGet([
			storageTeamName,
		])
		.then(result => resolve({
			team: result[0][1],
		}))
		.catch(ex => reject(ex))
	)}
}

export function clearTeamInfo(){
	AsyncStorage.clear()
}

window.safelyClearStorage = clearTeamInfo