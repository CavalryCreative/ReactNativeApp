import { connect } from 'react-redux'

import {fetchTeamsBegin, fetchTeamsSuccess, fetchTeamsError, updateTeam, fetchTeams} from '../actions'
import Settings from '../components/Settings'

const mapStateToProps = (state, props) => (
	{
		team: state.team,
		navHandler: props.navHandler,
		teams: state.fetchTeamsReducer.items,
		loading: state.fetchTeamsReducer.loading,
		error: state.fetchTeamsReducer.error
	}
)

const mapDispatchToProps = (dispatch) => (
	{		
		onTeamUpdate: (value) => {
			dispatch(updateTeam(value))
			//console.log('onTeamUpdate: ', value)
		},
		onTeamFetch: () => {
			dispatch(fetchTeams())
			console.log('onTeamFetch: ')
		},
	}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Settings)
