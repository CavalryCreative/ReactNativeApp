import React from 'react'
import { AsyncStorage } from 'react-native'

const storageTeamId = '@HonestFootball:teamId'

export function setTeamId(team){
	return AsyncStorage.multiSet([
			[storageTeamId, team]
		])
} 

export function getTeamId(){
	return new Promise((resolve, reject) => {
		AsyncStorage.multiGet([
			storageTeamId,
		])
		.then(result => resolve({
			team: result[0][1],
		}))
		.catch(ex => reject(ex))
	})
}

export function clearTeamInfo(){
	AsyncStorage.clear()
}

window.safelyClearStorage = clearTeamInfo