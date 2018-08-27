import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import { Provider} from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'

import AppContainer from './containers/AppContainer'
import honestFootballReducers from './reducers'

import { YellowBox } from 'react-native';

import thunk from 'redux-thunk';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

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
