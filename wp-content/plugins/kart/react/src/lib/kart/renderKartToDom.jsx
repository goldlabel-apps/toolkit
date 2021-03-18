import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Kart } from '../../components'
import { 
  kartDone,
} from '../../redux/app/actions'
import { getStore } from '../../'

const renderKartToDom = () => {
	const store = getStore()
	let divId = `kart-gummies-trial`
	const el = document.getElementById( divId )
	if ( !el ) return false
	//console.log ('OK! render the MOFO')
	kartDone()
	ReactDOM.render( <Provider store={store}>
						<Kart />
					</Provider>, document.getElementById( divId ))
	return true
}

export default renderKartToDom
