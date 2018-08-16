import {combineReducers} from 'redux'

function team(state = '', action){
	switch (action.type){
		case 'UPDATE_TEAM':
		case 'REHYDRATE_TEAMNAME':
			return action.team
		default:
			return state
	}
}

const honestFootballReducers = combineReducers({
	team,
})

export default honestFootballReducers