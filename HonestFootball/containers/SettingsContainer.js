import { connect } from 'react-redux'

import {fetchTeamsBegin, fetchTeamsSuccess, fetchTeamsError, updateTeam, fetchTeams, rehydrateTeamName} from '../actions'
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
		onRehydrateTeamName: (name) => {
			dispatch(rehydrateTeamName(name))
		}
	}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Settings)
