import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import { Provider} from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import honestFootballReducers from './reducers'

let store = createStore(honestFootballReducers)

class HonestFootball extends Component {
	render() {
		//console.log('Redux state:', this.state.getState())

		return(
			<Provider store={store}>
				<App />
			</Provider>
			)
	}
}

AppRegistry.registerComponent('HonestFootball', () => HonestFootball);
