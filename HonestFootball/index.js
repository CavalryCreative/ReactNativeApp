import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import { Provider} from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'

import AppContainer from './containers/AppContainer'
import honestFootballReducers from './reducers'

import thunk from 'redux-thunk';

let store = createStore(honestFootballReducers, applyMiddleware(thunk))
//console.log(store.getState());

class HonestFootball extends Component {
	render() {
		//console.log('Redux state:', store.getState())

		return(
			<Provider store={store}>
				<AppContainer />
			</Provider>
			)
	}
}

AppRegistry.registerComponent('HonestFootball', () => HonestFootball);
