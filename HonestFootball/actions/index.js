export function updateTeam(team){
	
	return {
		type: 'UPDATE_TEAM',
		team,
	}
}

export function rehydrateTeamName(team){
	return {
		type: 'REHYDRATE_TEAMNAME',
		team,
	}
}
