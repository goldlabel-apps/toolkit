import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
} from '../../'
import axios from 'axios'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import parseUa from 'ua-parser-js'

export const error = createAction(`PINGPONG/ERROR`) 
export const initted = createAction(`PINGPONG/INITTED`) 
export const initting = createAction(`PINGPONG/INIT`) 
export const feedback = createAction(`PINGPONG/FEEDBACK`)
export const feedbackObj = createAction(`PINGPONG/FEEDBACK/OBJ`)
export const dialog = createAction(`PINGPONG/DIALOG`)
export const overlay = createAction(`PINGPONG/OVERLAY`)
export const ting = createAction(`PINGPONG/TING`) 
export const id = createAction(`PINGPONG/ID`)
export const newMessage = createAction(`PINGPONG/MESSAGE/NEW`) 
export const gdprDone = createAction(`PINGPONG/GDPR/DONE`) 

export const initPingPong = () => {
	const store = getStore()
	store.dispatch({ type: `PINGPONG/INIT`, initting: true })
	fetchGeo()
	userAgent()
	updateTing(`host`, window.location.host)
	updateTing(`path`, window.location.pathname)
	updateTing(`docTitle`, document.title ? document.title : `dev server` )
	FingerprintJS.load().then(fp => {
	      fp.get().then(result => {
	      	updateTing(`fingerprint`, `${ window.location.host }_${ result.visitorId }` )
	      	completeInit()
	      })
	    })
	return true
}

export const gotoURL = (url, target) => { 
	window.open(url, target)
	if ( target === `_self` ){
		const store = getStore()
		store.dispatch({type: `PINGPONG/OVERLAY`, overlay: true })
	}
	return true
}

export const doGdpr = () => { 
	// console.log ('doing Gdpr')
	const store = getStore()
	store.dispatch({ type: `PINGPONG/GDPR/DONE`, gdprDone: true })
	return true
}

export const sendNewMessage = () => { 
	const store = getStore()
	const newMessage = store.getState().pingpong.newMessage.message
	// console.log ( 'sendNewMessage', newMessage )
	if ( newMessage.length < 5 ) {
		setFeedback({ 
			severity: `info`, 
			message: `Your message is too short`,
		})
		toggleFeedback( true)
		return false
	}
	const endpoint = `${ process.env.REACT_APP_LISTINGSLAB_API }/pingpong/new/`
	const body = {
		to: `blah blha`,
		from: `asod`,
		tingId: `daspidjpsadp`,
	}
	// console.log ('endpoint', endpoint)
	axios.post( endpoint, body )
		.then(function( res ) {
			// console.log ('data', res.data)
			// const store = getStore()
			// store.dispatch({ type: `PINGPONG/ID`, id: res.data.response.data.id })
			return true
		})
		.catch(function( error ) {
			throwError( error )
			setFeedback({ 
				severity: `error`, 
				message: `Error connecting to API`,
			})
			toggleFeedback( true)
			return false
		})
}

export const updateNewMessage = message => { 
	let newNewMessage = {
		message,
		valid: false,
	}
	if ( message.length > 5 ) newNewMessage.valid = true
	const store = getStore()
	store.dispatch({ type: `PINGPONG/MESSAGE/NEW`, newMessage: newNewMessage })
}

export const connectAPI = () => { 
	const ting = getStore().getState().pingpong.ting
	const endpoint = `${ process.env.REACT_APP_LISTINGSLAB_API }/pingpong/update/`
	axios.post( endpoint, ting )
		.then(function( res ) {
			const store = getStore()
			store.dispatch({ type: `PINGPONG/ID`, id: res.data.response.data.id })
			return true
		})
		.catch(function( error ) {
			throwError( error )
			setFeedback({ 
				severity: `error`, 
				message: `Error connecting to API`,
			})
			toggleFeedback( true)
			return false
		})
}

export const completeInit = () => {
	const ting = getStore().getState().pingpong.ting
	const {
		fingerprint,
		geonameId,
	} = ting
	if ( !fingerprint || !geonameId) return false
	const store = getStore()
	store.dispatch({ type: `PINGPONG/INITTED`, initted: true })
	connectAPI()
	return true
}

export const fetchGeo = () => { 
	const endpoint = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_API_IPGEO}`
	axios.get( endpoint )
		.then( function( response ) {
			const ipgeo = response.data
			updateTing(`callingCode`, ipgeo.calling_code)
			updateTing(`city`, ipgeo.city)
			updateTing(`continentCode`, ipgeo.continent_code)
			updateTing(`continentName`, ipgeo.continent_name)
			updateTing(`countryName`, ipgeo.country_name)
			updateTing(`countryCapital`, ipgeo.country_capital)
			updateTing(`countryCode2`, ipgeo.country_code2)
			updateTing(`countryCode3`, ipgeo.country_code3)
			updateTing(`countryTld`, ipgeo.country_tld)
			updateTing(`currencyCode`, ipgeo.currency ? ipgeo.currency.code : null)
			updateTing(`currencyName`, ipgeo.currency ? ipgeo.currency.name : null)
			updateTing(`currencySymbol`, ipgeo.currency ? ipgeo.currency.symbol : null)
			updateTing(`district`, ipgeo.district)
			updateTing(`geonameId`, ipgeo.geoname_id)
			updateTing(`ip`, ipgeo.ip)
			updateTing(`isEu`, ipgeo.is_eu)
			updateTing(`isp`, ipgeo.isp)
			updateTing(`languages`, ipgeo.languages)
			updateTing(`lat`, ipgeo.latitude)
			updateTing(`lng`, ipgeo.longitude)
			updateTing(`organization`, ipgeo.organization)
			updateTing(`stateProv`, ipgeo.state_prov)
			updateTing(`timeZone`, ipgeo.time_zone ? ipgeo.time_zone.name : null )
			updateTing(`zipcode`, ipgeo.zipcode)
			completeInit()
			return true
		})
		.catch(function( error ) { 
			const store = getStore()
			store.dispatch({type: `PINGPONG/ERROR`, error})
			setFeedback({ 
				severity: `warning`, 
				message: `Geo Location Error`,
			})
			toggleFeedback( true)
			completeInit()
			return false
		})
	return true
}

export const userAgent = () => {
	const ua = parseUa()
	updateTing(`device`, ua.device.type ? `${ ua.device.vendor } ${ua.device.model}` : `desktop` )
	updateTing(`osName`, ua.os.name)
	updateTing(`osVersion`, ua.os.version)
	updateTing(`browserName`, ua.browser.name)
	updateTing(`browserVersion`, ua.browser.version)
	updateTing(`browserMajor`, ua.browser.major)
	completeInit()
	return true
}

export const updateTing = (key, value) => {
	const store = getStore()
	let ting = store.getState().pingpong.ting
	ting = {
		...ting,
		[key]: value,
		updated: Date.now(),
	}
	store.dispatch({type: `PINGPONG/TING`, ting })
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
