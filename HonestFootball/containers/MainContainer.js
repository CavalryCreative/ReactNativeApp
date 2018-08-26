import { connect } from 'react-redux'

import Main from '../components/Main'

const mapStateToProps = (state) => (
	{
		team: state.team,
	}
)

export default connect(
	mapStateToProps,
	null
)(Main)