import { connect } from 'react-redux'

import {updateTeam} from '../actions'
import Settings from '../components/Settings'

const mapStateToProps = (state) => (
	{
		team: state.team,
	}
)

const mapDispatchToProps = (dispatch) => (
	{
		onTeamUpdate: (value) => {
			dispatch(updateTeam(value))
		},
	}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Settings)
