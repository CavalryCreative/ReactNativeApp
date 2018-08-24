import { connect } from 'react-redux'

import {fetchTeamsBegin, fetchTeamsSuccess, fetchTeamsError, updateTeam, fetchTeams} from '../actions'
import Settings from '../components/Settings'

const mapStateToProps = (state, props) => (
	{
		team: state.team,
		teams: state.fetchTeamsReducer.items,
		loading: state.fetchTeamsReducer.loading,
		error: state.fetchTeamsReducer.error
	}
)

const mapDispatchToProps = (dispatch) => (
	{		
		onTeamUpdate: (value) => {
			dispatch(updateTeam(value))
		},
		onTeamFetch: () => {
			dispatch(fetchTeams())
		},
	}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Settings)
