import pJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import reduxStore from './redux'

console.log( `${process.env.REACT_APP_APP} ${pJSON.version} (${process.env.REACT_APP_ENV})` )

const store = reduxStore()
export const getStore = () => { return store }

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById( 'listingslab-animatedsvg' )
)
