import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
	// getFStore,
} from '../../'
import axios from 'axios'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import parseUa from 'ua-parser-js'

export const error = createAction(`PINGPONG/ERROR`)
export const feedback = createAction(`PINGPONG/FEEDBACK`)
export const feedbackObj = createAction(`PINGPONG/FEEDBACK/OBJ`)
export const dialog = createAction(`PINGPONG/DIALOG`)
export const overlay = createAction(`PINGPONG/OVERLAY`)
export const connectedAPI = createAction(`PINGPONG/API/CONNECTED`)
export const connectingAPI = createAction(`PINGPONG/API/CONNECTING`)
export const connectAPIDone = createAction(`PINGPONG/API/CONNECT/DONE`)
export const gdpr = createAction(`PINGPONG/GDPR`) 
export const visitor = createAction(`PINGPONG/VISITOR`) 

export const initPingPong = () => {
	const ua = parseUa()
	updateVisitor(`host`, window.location.host)
	updateVisitor(`gdpr`, false)
	updateVisitor(`device`, ua.device.type ? `${ ua.device.vendor } ${ua.device.model}` : `desktop` )
	updateVisitor(`osName`, ua.os.name)
	updateVisitor(`osVersion`, ua.os.version)
	updateVisitor(`browserName`, ua.browser.name)
	updateVisitor(`browserVersion`, ua.browser.version)
	updateVisitor(`browserMajor`, ua.browser.major)
	FingerprintJS.load().then(fp => {
	      fp.get().then(result => {
	      	updateVisitor(`fingerprint`, result.visitorId )
	      })
	    })
	return true
}

export const updateVisitor = (key, value) => {
	const store = getStore()
	let visitor = store.getState().pingpong.visitor
	visitor = {
		...visitor,
		[key]: value,
	}
	store.dispatch({type: `PINGPONG/VISITOR`, visitor })
	return true
}

export const toggleGDPR = bool => { 
	const store = getStore()
	store.dispatch({type: `PINGPONG/GDPR`, gdpr: bool })
	updateVisitor(`gdpr`, bool)
	return true
}

export const connectAPI = () => { 
	const endpoint = `${ process.env.REACT_APP_LISTINGSLAB_API }/ping/`
	const store = getStore()
	store.dispatch({ type: `PINGPONG/API/CONNECTING`, connectingAPI: true })
	axios.get( endpoint )
		.then(function( res ) {
			if (res.data.response.data.message === `pong` ){
				store.dispatch({ type: `PINGPONG/API/CONNECTED`, connectedAPI: true })
				store.dispatch({ type: `PINGPONG/API/CONNECTING`, connectingAPI: false })
				store.dispatch({ type: `PINGPONG/API/CONNECT/DONE`, connectAPIDone: true })
			}
			return true
		})
		.catch(function( error ) {
			throwError( error )
			store.dispatch({ type: `PINGPONG/API/CONNECTING`, connectingAPI: false })
			store.dispatch({ type: `PINGPONG/API/CONNECTED`, connectedAPI: false })
			store.dispatch({ type: `PINGPONG/API/CONNECT/DONE`, connectAPIDone: true })
			setFeedback({ 
				severity: `success`, 
				message: `Error connecting to API`, 
				// message: error.toString(),
			})
			toggleFeedback( true)
			return false
		})
}

export const gotoURL = (url, target) => { 
	window.open(url, target)
	if ( target === `_self` ){
		const store = getStore()
		store.dispatch({type: `PINGPONG/OVERLAY`, overlay: true })
	}
	return true
}

export const setFeedback = feedbackObj => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/FEEDBACK/OBJ`, feedbackObj })
	return true
}

export const toggleDialog = bool => { 
	const store = getStore()
	store.dispatch({type: `PINGPONG/DIALOG`, dialog: bool })
	return true
}

export const toggleFeedback = bool => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/FEEDBACK`, feedback: bool })
	return true
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `PINGPONG/ERROR`, error })
	return true
}
