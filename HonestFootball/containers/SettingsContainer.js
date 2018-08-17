import { connect } from 'react-redux'

import {updateTeam} from '../actions'
import Settings from '../components/Settings'

const mapStateToProps = (state, props) => (
	{
		team: state.team,
		navHandler: props.navHandler,
	}
)

const mapDispatchToProps = (dispatch) => (
	{		
		onTeamUpdate: (value) => {
			dispatch(updateTeam(value))
			console.log('onTeamUpdate: ', value)
		},
	}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Settings)
