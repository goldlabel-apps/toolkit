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
export const visitor = createAction(`PINGPONG/VISITOR`) 
export const id = createAction(`PINGPONG/ID`) 

export const connectAPI = () => { 
	const visitor = getStore().getState().pingpong.visitor
	const endpoint = `${ process.env.REACT_APP_LISTINGSLAB_API }/pingpong/update/`
	axios.post( endpoint, visitor )
		.then(function( res ) {
			const store = getStore()
			store.dispatch({ type: `PINGPONG/ID`, id: res.data.response.data.id })
			return true
		})
		.catch(function( error ) {
			throwError( error )
			setFeedback({ 
				severity: `success`, 
				message: `Error connecting to API`,
			})
			toggleFeedback( true)
			return false
		})
}


export const initPingPong = () => {
	const store = getStore()
	store.dispatch({ type: `PINGPONG/INIT`, initting: true })
	fetchGeo()
	userAgent()
	updateVisitor(`host`, window.location.host)
	updateVisitor(`path`, window.location.pathname)
	FingerprintJS.load().then(fp => {
	      fp.get().then(result => {
	      	updateVisitor(`fingerprint`, `${ window.location.host }_${ result.visitorId }` )
	      	completeInit()
	      })
	    })
	return true
}

export const completeInit = () => {
	const visitor = getStore().getState().pingpong.visitor
	const {
		fingerprint,
		geonameId,
	} = visitor
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
			updateVisitor(`callingCode`, ipgeo.calling_code)
			updateVisitor(`city`, ipgeo.city)
			updateVisitor(`continentCode`, ipgeo.continent_code)
			updateVisitor(`continentName`, ipgeo.continent_name)
			updateVisitor(`countryName`, ipgeo.country_name)
			updateVisitor(`countryCapital`, ipgeo.country_capital)
			updateVisitor(`countryCode2`, ipgeo.country_code2)
			updateVisitor(`countryCode3`, ipgeo.country_code3)
			updateVisitor(`countryTld`, ipgeo.country_tld)
			updateVisitor(`currencyCode`, ipgeo.currency ? ipgeo.currency.code : null)
			updateVisitor(`currencyName`, ipgeo.currency ? ipgeo.currency.name : null)
			updateVisitor(`currencySymbol`, ipgeo.currency ? ipgeo.currency.symbol : null)
			updateVisitor(`district`, ipgeo.district)
			updateVisitor(`geonameId`, ipgeo.geoname_id)
			updateVisitor(`ip`, ipgeo.ip)
			updateVisitor(`isEu`, ipgeo.is_eu)
			updateVisitor(`isp`, ipgeo.isp)
			updateVisitor(`languages`, ipgeo.languages)
			updateVisitor(`lat`, ipgeo.latitude)
			updateVisitor(`lng`, ipgeo.longitude)
			updateVisitor(`organization`, ipgeo.organization)
			updateVisitor(`stateProv`, ipgeo.state_prov)
			updateVisitor(`timeZone`, ipgeo.time_zone ? ipgeo.time_zone.name : null )
			updateVisitor(`zipcode`, ipgeo.zipcode)
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
	updateVisitor(`device`, ua.device.type ? `${ ua.device.vendor } ${ua.device.model}` : `desktop` )
	updateVisitor(`osName`, ua.os.name)
	updateVisitor(`osVersion`, ua.os.version)
	updateVisitor(`browserName`, ua.browser.name)
	updateVisitor(`browserVersion`, ua.browser.version)
	updateVisitor(`browserMajor`, ua.browser.major)
	completeInit()
	return true
}

export const updateVisitor = (key, value) => {
	const store = getStore()
	let visitor = store.getState().pingpong.visitor
	visitor = {
		...visitor,
		[key]: value,
		updated: Date.now(),
	}
	store.dispatch({type: `PINGPONG/VISITOR`, visitor })
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
