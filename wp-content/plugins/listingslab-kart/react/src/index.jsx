import pJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import Advicator from './Advicator'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import reduxStore from './redux'
// import * as serviceWorker from './serviceWorker'

console.log( `${process.env.REACT_APP_APP} ${pJSON.version} (${process.env.REACT_APP_ENV})` )

const getHistory = () => { return createBrowserHistory() }
export { getHistory }

const store = reduxStore()
export const getStore = () => { return store }

ReactDOM.render(
	<Provider store={store}>
		<Advicator />
	</Provider>, 
	document.getElementById('listingslab-app')
)

// serviceWorker.register()
