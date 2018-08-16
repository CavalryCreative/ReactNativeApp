import { connect } from 'react-redux'

import {rehydrateTeamName} from '../actions'
import App from '../App'

const mapStateToProps = (state) => (
	{
		team: state.team,
	}
)

const mapDispatchToProps = (dispatch) => (
	{		
		onRehydrateTeamName: (name) => {
			dispatch(rehydrateTeamName(name))
		},
	}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
